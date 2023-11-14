import { configureStore } from '@reduxjs/toolkit';
import userPreferencesReducer from './userPreferencesSlice';
import giftRecommendationsReducer from './giftRecommendationsSlice';

export const store = configureStore({
    reducer: {
        userPreferences: userPreferencesReducer,
        giftRecommendations: giftRecommendationsReducer
    }
});
