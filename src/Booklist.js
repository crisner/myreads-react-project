import React from 'react';
import Bookshelf from './Bookshelf';
import Addbook from './Addbook';

function Booklist(props) {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <Bookshelf
                onShelfChange={() => props.onShelfChange}
                books={props.books}
                title="Currently Reading" />
                <Bookshelf
                onShelfChange={() => props.onShelfChange}
                books={props.books}
                title="Read" />
                <Bookshelf
                onShelfChange={() => props.onShelfChange}
                books={props.books}
                title="Want to Read" />
            </div>
            <Addbook />
        </div>
    );
}

export default Booklist;