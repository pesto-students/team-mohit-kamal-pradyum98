import React, { useState, useEffect, Suspense } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import axios from 'axios';
const GiftList = React.lazy(() => import('./components/GiftList')); // Lazy-loaded component

function App() {
    const [formData, setFormData] = useState({});
    const [gifts, setGifts] = useState([]);

    useEffect(() => {
        if (formData.age && formData.gender && formData.interest) {
            const OPENAI_API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
            axios
                .post(
                    OPENAI_API_ENDPOINT,
                    {
                        model: 'gpt-3.5-turbo',
                        messages: [
                            {
                                role: 'system',
                                content: 'You are a gift recommendation assistant.'
                            },
                            {
                                role: 'user',
                                content: `Gift ideas for a ${formData.age} year old ${formData.gender} interested in ${formData.interest}`
                            }
                        ]
                    },
                    {
                        headers: {
                            Authorization: `Bearer `,
                            'Content-Type': 'application/json'
                        }
                    }
                )
                .then((response) => {
                    const giftSuggestions = response.data.choices[0].text.trim().split('\n');
                    setGifts(giftSuggestions.map((gift) => ({ name: gift, description: '' })));
                })
                .catch((error) => {
                    console.error('Error fetching gift recommendations:', error);
                     const giftSuggestions = [{name: 'Football', 'description' :'Fifa-25'}];
                    setGifts(giftSuggestions.map((gift) => ({ name: gift.name, description: gift.description })));
                });
        }
    }, [formData]);

    const handleFormSubmit = (data) => {
        setFormData(data);
    };

    return (
        <div className="App">
            <Header />
            <Form onFormSubmit={handleFormSubmit} />
            <Suspense fallback={<div>Loading Gift Details...</div>}>
                {gifts.length && <GiftList gifts={gifts} />}
            </Suspense>
        </div>
    );
}

export default App;
