import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import Addbook from './Addbook';

class Booklist extends Component {
    render () {
        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Bookshelf className="bookshelf" title="Currently Reading"></Bookshelf>
                    <Bookshelf className="bookshelf" title="Want to Read"></Bookshelf>
                    <Bookshelf className="bookshelf" title="Read"></Bookshelf>
                </div>
                <Addbook />

            </div>
        );
    }
}

export default Booklist;