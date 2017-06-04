import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class extends Component {
  componentDidMount() {
    const { books, loadBooks } = this.props;

    if(Object.keys(books).length === 0) loadBooks();
  }

  render() {
    const { books } = this.props;

    return (
      <div className='container'>
        <ul className="list-group">
          {
            Object.keys(books).map(
              slug => {
                const book = books[slug];

                return (
                  <li key={slug} className="list-group-item">
                    <Link to={`/books/${book.id}`}>{book.title}</Link>
                  </li>
                )
              }
            )
          }
        </ul>
      </div>
    );
  }
}