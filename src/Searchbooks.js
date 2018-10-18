import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class Searchbooks extends Component {
  state={
    books: [] // search results
  }

  componentDidUpdate(prev) {
    if(this.props.query !== prev.query && this.props.query !== '') {
      BooksAPI.search(this.props.query).then((books) => {
        this.setState({ books });
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
        }));
        if ((books !== undefined && books.hasOwnProperty('error'))) {
          this.setState({ books: [] });
        }
      });
    }
    console.log(this.state.books);
  }

  componentWillUnmount() {
    BooksAPI.abort();
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
            this.state.books && Array.isArray(this.state.books) ? (
            this.state.books.map(book => {
              return (
              <li key={book.id}>
                <Book
                view="search"
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