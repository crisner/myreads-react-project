import React, { Component } from 'react';
import Book from './Book';

class Bookshelf extends Component {
    render () {
        return (
            <div>
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.map(book => {
                        return (
                            <li key={book.title}>
                                <Book
                                title={book.title}
                                authors={book.authors}
                                url={book.url} />
                            </li>
                        );
                    })}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Bookshelf;