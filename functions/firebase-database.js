const firebase = global.firebase || require('firebase');

function initializeApp(config) {
  if(firebase.apps.length === 0) {
    firebase.initializeApp(config);
  }
}

function getBooks() {
  return firebase.database()
    .ref('/books')
    .orderByChild('title')
    .once('value')
    .then(snapshot => {
      return { books: snapshot.val() };
    })
}

function getBookById(id) {
  return firebase.database()
    .ref(`/books/${id}`)
    .orderByChild('title')
    .once('value')
    .then(snapshot => {
      return { currentBook: snapshot.val() };
    })
}

module.exports = {
  initializeApp,
  getBooks,
  getBookById
}