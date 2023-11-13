import React from 'react';
import Book from '../Book/Book';

const books = [
    { title: 'Book 1', author: 'Author 1', year: 2020 },
    { title: 'Book 2', author: 'Author 2', year: 2018 },
    { title: 'Book 3', author: 'Author 3', year: 2022 }
    // ...more books
];

const BookList = () => {
    return (
        <div>
            <h1 className="book-list-header">Book List</h1>
            <ul className="book-list">
                {books.map((book) => (
                    <li key={book.title} className="book-list-item">
                        <Book title={book.title} author={book.author} year={book.year} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
