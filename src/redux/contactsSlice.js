import { createSlice } from '@reduxjs/toolkit';
import { addContactsThunk, deleteContactsThunk, getContactsThunk } from './contacts-thunk';

// Función para manejar el estado 'pending' (carga) de las acciones asíncronas.
const handlePending = state => {
  state.isLoading = true;
};

// Función para manejar el estado 'rejected' (rechazado) de las acciones asíncronas
const handleRejected = (state, { payload }) => {
  state.error = payload;
};

// Crear el slice de Redux
const contactsSlice = createSlice({
  name: 'contacts', // Nombre del slice
  initialState: {
    items: [], // Array de contactos
    isLoading: false, // Estado de carga
    error: null, // Error
  },

  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending) // Manejar el estado 'pending' de la acción getContactsThunk
      .addCase(getContactsThunk.rejected, handleRejected) // Manejar el estado 'rejected' de la acción getContactsThunk
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload; // Actualizar el array de contactos con los contactos obtenidos
      })

      .addCase(addContactsThunk.pending, handlePending)
      .addCase(addContactsThunk.rejected, handleRejected)
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items]; // Agregar el nuevo contacto al array de contactos
      })

      .addCase(deleteContactsThunk.pending, handlePending)
      .addCase(deleteContactsThunk.rejected, handleRejected)
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id); // Eliminar el contacto del array de contactos
      });
  },
});


// Exportar las acciones y el reducer del slice

export const { addContactAction, deleteContactAction } = contactsSlice.actions;
export const сontactsReducer = contactsSlice.reducer;






