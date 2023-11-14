import React from 'react';
import '../App.css';

function GiftList({ gifts }) {
    return (
        <div className="gift-list">
            {gifts.length > 0 ? (
                gifts.map((gift, index) => (
                    <div key={index} className="gift-item">
                        <h3>{gift.name}</h3>
                        <p>{gift.description}</p>
                    </div>
                ))
            ) : (
                <p>No gift recommendations available. Please fill out the form.</p>
            )}
        </div>
    );
}

export default GiftList;
