import React from 'react';

function BookshelfChanger (props) {
    // console.log(props);
    return (
        <div className="book-shelf-changer">
            <select id={props.shelf} onClick={(e) => props.onShelfChange()()(e)}>
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