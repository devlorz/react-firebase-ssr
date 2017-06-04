import React, { Component } from 'react';

export default class extends Component {
  componentDidMount() {
    const { book, loadBookById, match: { params } } = this.props;

    if(Object.keys(book).length === 0) loadBookById(params.id)
  }

  componentWillReceiveProps(nextProps) {
    const nextId = nextProps.match.params.id;

    if (nextId !== this.props.match.params.id) {
      this.props.loadBookById(nextId);
    }
  }

  render() {
    const { title, desc } = this.props.book

    return (
      <div className='container'>
        <table className="table table-striped details-table">
          <tbody>
            <tr>
              <td className="title">Title: </td>
              <td>{title}</td>
            </tr>
            <tr>
              <td className="title">Desc: </td>
              <td>{desc}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}