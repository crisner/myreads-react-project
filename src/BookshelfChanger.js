import React from 'react';

function BookshelfChanger (props) {
    let path = document.location.pathname;
    let shelfChange = props.onShelfChange;
    let addToShelf = props.addBook;
    return (
        <div className="book-shelf-changer">
            <select
            value={props.shelf}
            data-bookid={props.id}
            id={props.index}
            className={props.shelf}
            onChange={(e) => path === '/' ? shelfChange()()()(e) : addToShelf()()(e)} // Choose function to run depending on the page
            >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
       </div>
    );
}

export default BookshelfChanger;