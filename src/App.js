import React from 'react'
// import * as BooksAPI from './BooksAPI'
import Searchbooks from './Searchbooks';
import Booklist from './Booklist';
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    read: [],
    currentlyReading: [],
    wantToRead: [],
    showSearchPage: true
  }

  bookShelfChangeHandler = (event) => {
    /*
     * Remove selected book from current array(filter it out)
     * if selected value is read, push the selected book to the relevant array
     */
    let shelfName = event.target.id.replace(/\s/g, '').toLowerCase();
    let selectedOption = event.target.value.toLowerCase();
    if(selectedOption === shelfName) {
        return;
    }
    // console.log(this.state[selectedOption]);
    console.log(shelfName, selectedOption);
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Searchbooks />
        ) : (
          <Booklist books={this.state.books} onShelfChange={this.bookShelfChangeHandler} />
        )}
      </div>
    )
  }
}

export default BooksApp
