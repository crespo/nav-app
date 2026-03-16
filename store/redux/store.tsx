import { configureStore } from '@reduxjs/toolkit';

import favoritesReducer from '@/store/redux/favorites';

export const store = configureStore({
    reducer: {
        favoriteMeals: favoritesReducer,
    },
});
