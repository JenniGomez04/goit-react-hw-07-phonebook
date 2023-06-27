import { Table } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsThunk } from '../../redux/contacts-thunk';
import { selectFilteredContacts } from '../../redux/selectors';


export const Contacts = () => {
  const dispatch = useDispatch(); // Obtener a la función 'dispatch' del store utilizando useDispatch

  // Obtener los contactos filtrados del store utilizando el selector selectFilteredContacts
  const contacts = useSelector(selectFilteredContacts);

  // Definir la función deleteContact que elimina un contacto por su id
  const deleteContact = id => {
    console.log(`El id Elimina fue el ${id}`);
    dispatch(deleteContactsThunk(id)); // Despachar la acción deleteContactsThunk con el id proporcionado
  };

   // Renderizar el componente de tabla y los contactos en forma de filas de la tabla
  return (
    <Table>
      <tbody>
        {contacts.map(({ id, name, phone }) => {
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>{phone}</td>
              <td>
                <button onClick={() => deleteContact(id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
