import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import Addbook from './Addbook';

class Booklist extends Component {
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

    render () {
        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Bookshelf onShelfChange={this.bookShelfChangeHandler} books={this.state.reading} className="bookshelf" title="Currently Reading" />
                    <Bookshelf onShelfChange={this.bookShelfChangeHandler} books={this.state.read} className="bookshelf" title="Read" />
                    <Bookshelf onShelfChange={this.bookShelfChangeHandler} books={this.state.wantToRead} className="bookshelf" title="Want to Read" />
                </div>
                <Addbook />

            </div>
        );
    }
}

export default Booklist;