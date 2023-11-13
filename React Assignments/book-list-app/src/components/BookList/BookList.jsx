import React, { Component } from 'react';
import Book from '../Book/Book';
import './BookList.css';
import WithLogging from '../HOC/WithLogging';
import BookForm from '../BookForm/BookForm';

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                { title: 'Book 1', author: 'Author 1', year: 2020 },
                { title: 'Book 2', author: 'Author 2', year: 2018 },
                { title: 'Book 3', author: 'Author 3', year: 2022 }
            ]
        };
    }
    addBook = (newBook) => {
        this.setState((prevState) => ({
            books: [...prevState.books, newBook]
        }));
    };
    handleDelete = (title) => {
        this.setState((prevState) => ({
            books: prevState.books.filter((book) => book.title !== title)
        }));
    };
    render() {
        const { books } = this.state;
        return (
            <>
                <h1 className="book-list-header">Book List</h1>
                <BookForm addBook={this.addBook} />
                {books.length ? (
                    <ul className="book-list">
                        {this.state.books.map((book) => (
                            <li key={book.title} className="book-list-item">
                                <Book key={book.title} title={book.title} author={book.author} year={book.year} />
                                <button onClick={() => this.handleDelete(book.title)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>The book list is currently empty.</p>
                )}
            </>
        );
    }
}

export default WithLogging(BookList);
