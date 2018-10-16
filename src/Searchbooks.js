import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

console.log(this.props);
class Searchbooks extends Component {
  state={
    books: [] // search results
  }

  componentDidUpdate(prev) {
    if(this.props.query !== prev.query && this.props.query !== '') {
      BooksAPI.search(this.props.query).then((books) => {

        this.setState({ books });

        if ((books !== undefined && books.hasOwnProperty('error'))) {
          this.setState({ books: [] });
        }

        if ( books !== undefined) {
          console.log(books.hasOwnProperty('error'));
        }
        console.log(this.props.query);
        console.log(this.state.books);
      });
    }

  }

  render () {
    return (
        <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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