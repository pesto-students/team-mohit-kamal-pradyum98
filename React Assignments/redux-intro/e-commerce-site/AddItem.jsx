import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './cartSlice';

function AddItemForm() {
    const [item, setItem] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!item.trim()) return;
        dispatch(addItem({ id: Date.now(), name: item, quantity: 1 }));
        setItem('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={item} onChange={(e) => setItem(e.target.value)} placeholder="Enter an item" />
            <button type="submit">Add to Cart</button>
        </form>
    );
}

export default AddItemForm;
