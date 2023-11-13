import React from 'react';
import BookList from './components/BookList/BookList';
import { ThemeProvider } from './Theme/ThemeContext';

const App = () => {
    return (
        <ThemeProvider>
            <div>
                <BookList />
            </div>
        </ThemeProvider>
    );
};

export default App;
