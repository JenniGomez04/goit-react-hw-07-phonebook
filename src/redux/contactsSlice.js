import { createSlice } from '@reduxjs/toolkit';

// Creación del slice de Redux para manejar el estado de los contactos

const contactsSlice = createSlice({
  name: 'contacts', // Nombre del slice
  initialState: {
    items: [], // Array de contactos
    isLoading: false, // Indicador de carga
    error: null, // Error en caso de fallo
  },
  reducers: { // Reducers para manejar las acciones relacionadas con los contactos
    fetchContactsStart(state) {
      state.isLoading = true;  // Marcar el inicio de la carga
      state.error = null;  // Limpiar el error
    },
    fetchContactsSuccess(state, action) {
      state.items = action.payload; // Actualizar el array de contactos con los datos recibidos
      state.isLoading = false; // Marcar el fin de la carga
      state.error = null; // Limpiar el error
    },
    fetchContactsFailure(state, action) {
      state.isLoading = false; // Marcar el fin de la carga
      state.error = action.payload; // Establecer el error recibido
    },
    addContact(state, action) {
      console.log(action);
      state.items.push(action.payload); // Agregar un nuevo contacto al array de contactos
    },
    deleteContact(state, action) {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});


// Exportar las acciones y el reducer generados por el slice

export const { fetchContactsStart, fetchContactsSuccess, fetchContactsFailure, addContact, deleteContact } = contactsSlice.actions;
export const сontactsReducer = contactsSlice.reducer;  // Reducer generado por el slice






