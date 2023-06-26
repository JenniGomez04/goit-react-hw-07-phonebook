import React, { useState, useEffect } from 'react';
import { Table } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsThunk } from '../../redux/contacts-thunk';
import { getFilter } from '../../redux/selectors';
import { getContacts} from '../Services/contactsAPI';

export const Contacts = () => {
  const dispatch = useDispatch();

  // Obtiene el filtro del estado global de Redux
  const filterQuery = useSelector(getFilter);

  // Estado local para almacenar los contactos filtrados
  const [filteredContacts, setFilteredContacts] = useState([]);

  // Función asincrónica para obtener los contactos de la API y actualizar el estado
  const fetchData = async () => {
    const contacts = await getContacts();
    setFilteredContacts(contacts);
  };

  // Utiliza el hook useEffect para llamar a fetchData al montar el componente
  useEffect(() => {
    fetchData();
  }, []);

  // Normaliza el filtro obtenido del estado de Redux
  const normalizedFilter = filterQuery.toLowerCase();

  // Filtra los contactos basados en el filtro normalizado
  const filteredContactsToShow = filteredContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  // Manejador de la eliminación de un contacto
  const deleteContactHandler = async id => {
    await dispatch(deleteContactsThunk(id)); // Invoca el thunk deleteContactsThunk para eliminar el contacto
    fetchData(); // Vuelve a obtener los contactos después de la eliminación
  };


  return (
    <Table>
      <tbody>
        {filteredContactsToShow.map(({ id, name, phone }) => {
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>{phone}</td>
              <td>
                <button onClick={() => deleteContactHandler(id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
