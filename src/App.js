import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Searchbooks from './Searchbooks';
import Booklist from './Booklist';
import './App.css'

class BooksApp extends React.Component {
  state = {
    query: '',
    books: [],
    results: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  componentDidUpdate(prev) {
    let query = this.state.query;
    if (query !== prev.query && query === '') {
      query = ' ';
    }
    if(query !== prev.query) {
      BooksAPI.search(query).then((results) => {
        // console.log(results);
        if (Array.isArray(results)) {
          this.setState(() => ({
            results: results.map(book => {
              book.shelf = 'none';
              this.state.books.map(shelvedBook => {
                if (shelvedBook.id === book.id) {
                  book.shelf = shelvedBook.shelf;
                }
                return book;
              })
              return book;
            })
          }))
        }
        if ((results !== undefined && results.hasOwnProperty('error'))) {
          this.setState({ results: [] });
        }
      });
    }
  }

  bookShelfChangeHandler = (event) => {
    /*
     * Move book from one shelf to the selected shelf
     */
    let selectedIndex = Number(event.target.id);
    let selectedOption = event.target.value;
    this.setState((state) => ({
      books: state.books.map((book, index) => {
        if (index === selectedIndex) {
          book.shelf = selectedOption;
          BooksAPI.update(book, selectedOption);
        }
        return book;
      })
    }));
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() });
  }

  addToList = (event) => {
    let shelf = event.target.value;
    let bookid = event.target.getAttribute('data-bookid');
    let bookList = this.state.books;
    BooksAPI.get(bookid).then((book) => {
      book.shelf = shelf;
      bookList.map(shelvedBook => {
        let counter = 0; // Check against bookList length
        if (book.id !== shelvedBook.id) {
          counter++;
        }
        if (counter === bookList.length) {
          bookList.push(book);
        }
        return book;
      });
      this.setState(() => ({
        books: bookList.map(b => {
          if (b.id === book.id) {
            b.shelf = shelf; // Update shelf
          }
          return b;
        })
      }))
      BooksAPI.update(book, shelf);
    });
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <Searchbooks books={this.state.results}
          updateQuery={(query) => this.updateQuery(query)}
          addBook={this.addToList} />
        )} />

        <Route exact path="/" render={() => (
          <Booklist books={this.state.books}
          onShelfChange={this.bookShelfChangeHandler} />
        )} />
      </div>
    )
  }
}

export default BooksApp
