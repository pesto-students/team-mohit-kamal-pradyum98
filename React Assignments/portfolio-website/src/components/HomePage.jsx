import React from 'react';
import './HomePage.css'; // Make sure you import the CSS file

const HomePage = () => {
    return (
        <div className="home-container">
            <h1>Welcome to My Portfolio</h1>
            <p>
                Hi, I'm Pradyum, a passionate developer with a knack for building web applications that drive digital
                transformation.
            </p>
            <img
                className="profile-image"
                src="https://via.placeholder.com/150"
                alt="Profile"
            />
        </div>
    );
};

export default HomePage;
