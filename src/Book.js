import React from 'react';
import BookshelfChanger from './BookshelfChanger';

function Book (props) {
        return (
                <div className="book">
                <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ props.url })` }}></div>
                        <BookshelfChanger
                        id={props.id}
                        index={props.index}
                        shelf={props.shelf}
                        onShelfChange={() => props.onShelfChange}
                        addBook={() => props.addBook}
                        />
                </div>
                <div className="book-title">{ props.title }</div>
                <div className="book-authors">{ props.authors }</div>
                </div>
        );
}

export default Book;