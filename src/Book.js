import React from 'react';
import BookshelfChanger from './BookshelfChanger';

function Book (props) {
        // console.log(props);
        return (
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ props.url })` }}></div>
                    { props.view === 'shelf' ? (
                            <BookshelfChanger
                            index={props.index}
                            shelf={props.shelf}
                            onShelfChange={() => props.onShelfChange}
                            />
                    ) : (null) }
                </div>
                <div className="book-title">{ props.title }</div>
                <div className="book-authors">{ props.authors }</div>
                </div>
        );
}

export default Book;