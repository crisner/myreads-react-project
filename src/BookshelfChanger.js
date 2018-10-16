import React from 'react';

function BookshelfChanger (props) {
    // console.log(props);
    return (
        <div className="book-shelf-changer">
            <select
            value={props.shelf}
            data-bookid={props.id}
            id={props.index}
            className={props.shelf}
            onChange={(e) => props.onShelfChange()()()(e)}
            onClick={(e) => props.addBook()()(e)}>
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