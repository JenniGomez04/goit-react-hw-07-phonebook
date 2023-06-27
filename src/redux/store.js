import { configureStore } from '@reduxjs/toolkit';
import { сontactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

// Configurar el store de Redux
export const store = configureStore({
  reducer: {
    contacts: сontactsReducer, // Reducer para el estado de los contactos
    filter: filterReducer, // Reducer para el estado del filtro
  },
});
