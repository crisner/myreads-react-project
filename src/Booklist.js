import React, { Component } from 'react';
import Bookshelf from './Bookshelf';

class Booklist extends Component {
    render () {
        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Bookshelf />
                </div>
                <div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>
        );
    }
}

export default Booklist;