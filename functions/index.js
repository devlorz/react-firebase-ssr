const functions = require('firebase-functions');
const firebase = require('firebase');
const app = require('express')();
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const ServerApp = React.createFactory(require('./build/server.bundle.js').default);
const template = require('./template');

const appConfig = functions.config().firebase;
const database = require('./firebase-database');
database.initializeApp(appConfig);

function renderApplication(url, res, initialState) {
  const html = ReactDOMServer.renderToString(
    ServerApp({ url: url, context: {}, initialState, appConfig })
  );

  const templatedHtml = template({
    body: html,
    initialState: JSON.stringify(initialState)
  });

  res.send(templatedHtml);
}

app.get('/favicon.ico', function(req, res) {
  res.send(204);
});

app.get('/books/:bookId?', (req, res) => {
  res.set('Cache-Control', 'public, max-age=60, s-maxage=180');

  if (req.params.bookId) {
    database.getBookById(req.params.bookId).then((resp) => {
      renderApplication(req.url, res, resp);
    });
  } else {
    database.getBooks().then((resp) => {
      renderApplication(req.url, res, resp);
    });
  }
});

exports.app = functions.https.onRequest(app);
