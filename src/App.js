import React from 'react'
// import * as BooksAPI from './BooksAPI'
import Searchbooks from './Searchbooks';
import Booklist from './Booklist';
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
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
    console.log(this.state[selectedOption]);
    console.log(shelfName, selectedOption);
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Searchbooks />
        ) : (
          <Booklist />
        )}
      </div>
    )
  }
}

export default BooksApp
