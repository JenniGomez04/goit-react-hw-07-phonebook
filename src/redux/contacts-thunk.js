import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContacts, deleteContacts, getContacts } from "components/Services/contactsAPI";

// Es un Thunk que realiza solicitudes para obtener todos los contactos
// La fn get importada de la servicesAPI captura errores y rejectWithValue -> Regresa el error

export const getContactsThunk = createAsyncThunk (
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try{
      const data = await getContacts();
      console.log(`${data}`)
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
    }
);


// Es un Thunk addContacts que se encarga de agg 1 nuevo contacto, recibe parametro contact
// La fn importada de la servicesAPI captura errores y rejectWithValue -> Regresa el error

export const addContactsThunk = createAsyncThunk (
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try{
      const data = await addContacts(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
    }
);

// Es un Thunk deleteContact que se encarga de eliminar 1 contacto existente, recibe parametro id
// La fn importada de la servicesAPI captura errores y rejectWithValue -> Regresa el error

export const deleteContactsThunk = createAsyncThunk (
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try{
      const data = await deleteContacts(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
    }
);
