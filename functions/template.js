const template = function(opts) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Books</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    </head>
    <body>
      <div id="root">${opts.body}</div>
    </body>
    <script>
      window.__initialState = ${opts.initialState}
    </script>
    <script src="/__/firebase/4.1.1/firebase-app.js"></script>
    <script src="/__/firebase/4.1.1/firebase-database.js"></script>
    <script src="/__/firebase/init.js"></script>
    <script src='/assets/client.bundle.js'></script>
  </html>
  `;
}

module.exports = template;