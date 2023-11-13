import React, { useState } from 'react';

export const BookDetail = ({ book }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Year: {book.year}</p>
            <button onClick={() => setShowDetails(!showDetails)}>Toggle Details</button>
            {showDetails && <p>Additional details here...</p>}
        </div>
    );
};
