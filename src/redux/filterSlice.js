import { createSlice } from '@reduxjs/toolkit';

// Crea un slice llamado 'filter' que maneja el estado y las acciones relacionadas con el filtro de contactos.

const filterSlice = createSlice({
  name: 'filter', // Nombre del slice
  initialState: '', // Estado inicial del filtro (cadena vacía)
  reducers: {
    filterContacts(state, action) {
      return (state = action.payload); // Actualiza el estado del filtro con el valor recibido en la acción
    },
  },
});

// Exporta las acciones creadas por el slice
export const { filterContacts } = filterSlice.actions;

// Exporta el reducer del filtro
export const filterReducer = filterSlice.reducer;
