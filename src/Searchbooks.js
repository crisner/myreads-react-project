import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class Searchbooks extends Component {
  state={
    books: [] // search results
  }

  componentDidUpdate(prev) {
    let query = this.props.query;
    if (query !== prev.query && query === '') {
      this.setState({ books: [] });
      return;
    }
    if(query !== prev.query) {
      BooksAPI.search(query).then((books) => {
        if (Array.isArray(books)) {
          this.setState(() => ({
            books: books.map(book => {
              book.shelf = 'none';
              this.props.books.map(shelvedBook => {
                if (shelvedBook.id === book.id) {
                  book.shelf = shelvedBook.shelf;
                }
                return book;
              })
              return book;
            })
          }))
        }
        if ((books !== undefined && books.hasOwnProperty('error'))) {
          this.setState({ books: [] });
        }
      });
    }
  }

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
            this.state.books ? (
            this.state.books.map(book => {
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