import React from 'react';
import * as BooksAPI from './BooksAPI';
import Searchbooks from './Searchbooks';
import Booklist from './Booklist';
import './App.css'

class BooksApp extends React.Component {
  state = {
    query: '',
    books: [],
    showSearchPage: true
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
      console.log(this.state.books);
    });
  }

  bookShelfChangeHandler = (event) => {
    /*
     * Move book from one shelf to the selected shelf
     */
    let selectedIndex = Number(event.target.id);
    let selectedOption = event.target.value;
    console.log(this.state.books[selectedIndex].shelf);
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
    console.log(query);
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Searchbooks books={this.state.books}
          query={this.state.query}
          updateQuery={(query) => this.updateQuery(query)} />
        ) : (
          <Booklist books={this.state.books}
          onShelfChange={this.bookShelfChangeHandler} />
        )}
      </div>
    )
  }
}

export default BooksApp
