import { configureStore } from '@reduxjs/toolkit';
import { сontactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: сontactsReducer,
    filter: filterReducer,
  },
});

