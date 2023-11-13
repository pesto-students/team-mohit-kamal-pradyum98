import React, { useState } from 'react';
import './BookForm.css';

const BookForm = ({ addBook }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook({ title, author, year });
        setTitle('');
        setAuthor('');
        setYear('');
    };

    return (
        <form onSubmit={handleSubmit} className="book-form">
            <h2 className="book-form-title">Add a New Book</h2>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
                required
            />
            <input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" required />
            <button type="submit">Add Book</button>
        </form>
    );
};

export default BookForm;
