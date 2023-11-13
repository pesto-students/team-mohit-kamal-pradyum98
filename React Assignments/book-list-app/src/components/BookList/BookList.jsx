import React, { useContext, useState } from 'react';
import Book from '../Book/Book';
import './BookList.css';
import WithLogging from '../HOC/WithLogging';
import BookForm from '../BookForm/BookForm';
import BookDataLoader from './BookDataLoader';
import { ThemeContext } from '../../Theme/ThemeContext';
import ThemeSwitcher from '../../Theme/ThemeSwitcher';

const BookList = () => {
    const { theme } = useContext(ThemeContext);
    const [books, setBooks] = useState();

    const addBook = (newBook) => {
        setBooks((prevState) => ({
            books: [...prevState.books, newBook]
        }));
    };
    const handleDelete = (title) => {
        setBooks((prevState) => ({
            books: prevState.books.filter((book) => book.title !== title)
        }));
    };
    console.log(theme,'theme');
    return (
        <div className={`${theme}-theme`}>
            <ThemeSwitcher />
            <BookDataLoader setBooks={setBooks} />
            <h1 className="book-list-header">Book List</h1>
            <BookForm addBook={addBook} />
            {books?.length ? (
                <ul className="book-list">
                    {books?.map((book) => (
                        <li key={book.title} className="book-list-item">
                            <Book key={book.title} title={book.title} author={book.author} year={book.year} />
                            <button onClick={() => handleDelete(book.title)}>Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>The book list is currently empty.</p>
            )}
        </div>
    );
};

export default WithLogging(BookList);
