import React, { Component } from 'react';
import Book from './Book';

class Bookshelf extends Component {
    render () {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.map((book, index) => {
                        return (
                            book.shelf.toLowerCase() === this.props.title.replace(/\s/g, '').toLowerCase() ? (
                            <li key={book.id}>
                                <Book
                                index={index}
                                shelf={book.shelf}
                                onShelfChange={() => this.props.onShelfChange}
                                title={book.title}
                                authors={book.authors}
                                url={book.imageLinks.thumbnail} />
                            </li>
                            ) : (null)
                        );
                    })}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Bookshelf;