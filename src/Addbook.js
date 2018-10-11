import React from 'react';

function Addbook(props) {
        return (
            <div className="open-search">
                <a onClick={() => props.setState({ showSearchPage: true })}>Add a book</a>
            </div>
        );
}

export default Addbook;