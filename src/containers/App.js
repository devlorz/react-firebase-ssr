import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Books, Book } from '../components';
import database from 'firebase-database';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = { books: {}, currentBook: {}, ...prop }
  }

  loadBookById = id => {
    database.getBookById(id)
      .then(({ currentBook }) => this.setState({ currentBook }));
  }

  loadBooks = () => {
    database.getBooks().then(({ books }) => this.setState({ books }));
  }

  render() {
    const { books, currentBook } = this.state;

    return (
      <div>
        <nav className='navbar navbar-light bg-faded mb-3'>
          <div className="container">
            <div className="navbar-header">
              <Link to='/books' className='navbar-brand'>Books</Link>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path='/books/:id' render={props => (
            <Book {...props}
              book={currentBook}
              loadBookById={this.loadBookById} />
          )} />
          <Route path='/books' render={props => (
            <Books {...props} key='books'
              books={books}
              loadBooks={this.loadBooks} />
          )} />
        </Switch>
      </div>
    );
  }
}