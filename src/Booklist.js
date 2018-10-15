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
                    <Bookshelf
                    onShelfChange={() => this.props.onShelfChange}
                    books={this.props.books.currentlyReading}
                    className="bookshelf"
                    title="Currently Reading" />
                    <Bookshelf
                    onShelfChange={() => this.props.onShelfChange}
                    books={this.props.books.read}
                    className="bookshelf"
                    title="Read" />
                    <Bookshelf
                    onShelfChange={() => this.props.onShelfChange}
                    books={this.props.books.wantToRead}
                    className="bookshelf"
                    title="Want to Read" />
                </div>
                <Addbook />
            </div>
        );
    }
}

export default Booklist;