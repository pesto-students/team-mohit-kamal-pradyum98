import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAge, setGender, setInterests } from '../redux/userPreferencesSlice';

import '../App.css';
import { setGifts } from '../redux/giftRecommendationsSlice';
import axios from 'axios';

function Form({ onFormSubmit }) {
    const [age, setAgeState] = useState('');
    const [gender, setGenderState] = useState('');
    const [interest, setInterestState] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setAge(age));
        dispatch(setGender(gender));
        dispatch(setInterests(interest));
        if (age && gender && interest) {
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
                                content: `Gift ideas for a ${age} year old ${gender} interested in ${interest}`
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
                    const giftSuggestions = [{ name: 'Football', description: 'Fifa-25' }];
                    dispatch(setGifts(giftSuggestions));
                });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="gift-form">
            <div className="form-group">
                <label>Age:</label>
                <input type="number" value={age} onChange={(e) => setAgeState(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Gender:</label>
                <select value={gender} onChange={(e) => setGenderState(e.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="form-group">
                <label>Interests:</label>
                <input type="text" value={interest} onChange={(e) => setInterestState(e.target.value)} />
            </div>
            <button type="submit" className="btn">
                Get Recommendations
            </button>
        </form>
    );
}

export default Form;
