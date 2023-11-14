import React, { useState } from 'react';
import '../App.css';

function Form({ onFormSubmit }) {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [interest, setInterest] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit({ age, gender, interest });
    };

    return (
        <form onSubmit={handleSubmit} className="gift-form">
            <div className="form-group">
                <label>Age:</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Gender:</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="form-group">
                <label>Interests:</label>
                <input type="text" value={interest} onChange={(e) => setInterest(e.target.value)} />
            </div>
            <button type="submit" className="btn">
                Get Recommendations
            </button>
        </form>
    );
}

export default Form;
