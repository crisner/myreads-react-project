import React from 'react';
import * as BooksAPI from './BooksAPI';
import Searchbooks from './Searchbooks';
import Booklist from './Booklist';
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
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

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Searchbooks books={this.state.books} />
        ) : (
          <Booklist books={this.state.books}
          onShelfChange={this.bookShelfChangeHandler} />
        )}
      </div>
    )
  }
}

export default BooksApp
