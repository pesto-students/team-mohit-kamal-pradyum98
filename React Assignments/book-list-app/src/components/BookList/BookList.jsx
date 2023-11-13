import React, { Component } from 'react';
import Book from '../Book/Book';
import './BookList.css';
import WithLogging from '../HOC/WithLogging';

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                { title: 'Book 1', author: 'Author 1', year: 2020 },
                { title: 'Book 2', author: 'Author 2', year: 2018 },
                { title: 'Book 3', author: 'Author 3', year: 2022 }
                // ...more books
            ]
        };
    }

    render() {
        return (
            <>
                <h1 className="book-list-header">Book List</h1>
                <ul className="book-list">
                    {this.state.books.map((book) => (
                        <li key={book.title} className="book-list-item">
                            <Book key={book.title} title={book.title} author={book.author} year={book.year} />
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

export default WithLogging(BookList);
