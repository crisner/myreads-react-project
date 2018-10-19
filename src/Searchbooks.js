import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

class Searchbooks extends Component {

  render () {
    return (
        <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={(e) => this.props.updateQuery(e.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {
            this.props.books ? (
            this.props.books.map(book => {
              return (
              <li key={book.id}>
                <Book
                id={book.id}
                shelf={book.shelf}
                addBook={() => this.props.addBook}
                title={book.title}
                authors={book.authors}
                url={book.imageLinks ? book.imageLinks.thumbnail : null}
                />
              </li>
              );
            })
            ) : (null)
          }
          </ol>
        </div>
        </div>
    );
  }
}

export default Searchbooks;