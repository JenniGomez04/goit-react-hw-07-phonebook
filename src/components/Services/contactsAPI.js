import axios from "axios";

// Creación de instacia en solitudes http, instacia API

const contactsAPI = axios.create ({
  baseURL: 'https://6497a0e39543ce0f49e14cd5.mockapi.io/contacts',
});

// console.log("Instancia de contactsAPI creada:", contactsAPI);

// Realiza una solicitud GET a la ruta "/contacts" utilizando la instancia de contactsAPI

export const getContacts = async () => {
  const { data } = await contactsAPI.get('/contacts');
  console.log ('Ingresamos a la API')
 // console.log(JSON.stringify(data, null, 2)); //Arroja el array de objetos de campos traidos de la Api
  return data;
};

// Realiza una solicitud POST a la ruta "/contacts" utilizando la instancia de contactsAPI

export const addContacts = async contact => {
  const { data } = await contactsAPI.post('/contacts', contact);
  console.log ('Contacto Nuevo Agregado con Exito');
  return data;
};

// Realiza una solicitud DELETE a la ruta "/contacts/{id}" utilizando la instancia de contactsAPI

export const deleteContacts = async id => {
  const { data } = await contactsAPI.delete(`/contacts/${id}`);
  console.log (`Eliminado el contacto con id ${id}`)
  return data;
};


