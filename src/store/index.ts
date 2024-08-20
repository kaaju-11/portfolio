import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage
import testimonialReducer from './testimonialSlice'; // Replace with your Redux slice

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['testimonial'], // Persist only the relevant state slices
};

const rootReducer = combineReducers({
  testimonial: testimonialReducer, // Your testimonial slice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

