import { createSlice } from '@reduxjs/toolkit';

// Crear el slice de Redux para el filtro
const filterSlice = createSlice({
  name: 'filter',
  initialState: '', // Estado inicial del filtro (cadena vacía)
  reducers: {
    filterContacts(state, action) {
       // Reducer para la acción filterContacts
      return (state = action.payload); // Actualizar el estado del filtro con el valor proporcionado en payload
    },
  },
});

// Exportar la acción y el reducer del slice de filtro
export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
