import React from 'react';
import Book from './Book';

function Bookshelf(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {props.books.map((book, index) => {
                    return (
                        book.shelf.toLowerCase() === props.title.replace(/\s/g, '').toLowerCase() ? (
                        <li key={book.id}>
                            <Book
                            index={index}
                            shelf={book.shelf}
                            onShelfChange={() => props.onShelfChange}
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

export default Bookshelf;