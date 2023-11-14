import React from 'react';
import '../App.css';

const Header = React.memo(function Header() {
    return (
        <header className="app-header">
            <h1>Gift Recommendation App</h1>
        </header>
    );
});

export default Header;
