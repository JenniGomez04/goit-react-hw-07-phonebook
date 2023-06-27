// Selector para obtener los contactos filtrados
export const selectFilteredContacts = state => {
  const filter = getFilter(state);  // Obtener el valor del filtro del estado
  const contact = getContactsList(state);  // Obtener la lista de contactos del estado
  return contact.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  // Compara el nombre de cada contacto en minúsculas con el filtro en minúsculas, eliminando los espacios en blanco al principio y al final

};

// Selector para obtener la lista de contactos del estado
export const getContactsList = state => state.contacts.items;
// Selector para obtener el valor del filtro del estado
export const getFilter = state => state.filter;
