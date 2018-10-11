import React, { Component } from 'react';
import Book from './Book';

class Bookshelf extends Component {
    constructor () {
        super();
        this.state = {
            read: [],
            reading: [],
            wantToRead: []
        }
    }
    render () {
        return (
            <div>
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    <Book
                    title="To Kill a Mockingbird"
                    authors="Harper Lee"
                    url="http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api" />
                    </ol>
                </div>
            </div>
        );
    }
}

export default Bookshelf;