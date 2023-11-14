import { createSlice } from '@reduxjs/toolkit';

export const userPreferencesSlice = createSlice({
    name: 'userPreferences',
    initialState: {
        age: '',
        gender: '',
        interests: ''
    },
    reducers: {
        setAge: (state, action) => {
            state.age = action.payload;
        },
        setGender: (state, action) => {
            state.gender = action.payload;
        },
        setInterests: (state, action) => {
            state.interests = action.payload;
        }
    }
});

export const { setAge, setGender, setInterests } = userPreferencesSlice.actions;

export default userPreferencesSlice.reducer;
