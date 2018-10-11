import React, { Component } from 'react';
import Book from './Book';

class Bookshelf extends Component {
    constructor () {
        super();
        this.state = {
            read: [],
            reading: [],
            wantToRead: []
        }
    }
    render () {
        return (
            <div>
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    <Book />
                    </ol>
                </div>
            </div>
        );
    }
}

export default Bookshelf;