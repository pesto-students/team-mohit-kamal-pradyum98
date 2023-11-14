import { createSlice } from '@reduxjs/toolkit';

export const giftRecommendationsSlice = createSlice({
    name: 'giftRecommendations',
    initialState: {
        gifts: []
    },
    reducers: {
        setGifts: (state, action) => {
            state.gifts = action.payload;
        }
    }
});

export const { setGifts } = giftRecommendationsSlice.actions;

export default giftRecommendationsSlice.reducer;
