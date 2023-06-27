import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { filterContacts } from 'redux/filterSlice';
import { FormStyled } from './Form.styled';

//Se encarga de manejar el filtro de busquedad de los contactos.

export const Filter = () => {
  const dispatch = useDispatch(); // Obtener la función 'dispatch' del store utilizando useDispatch.

  const handleFilterChange = e => {
    dispatch(filterContacts(e.target.value)); // Despachar la acción filterContacts con el valor del campo de búsqueda como argumento.
  };

  return (
    <FormStyled>
      <label>
        Find contacts by name
        <input
          type="text"
          name="name"
          onChange={handleFilterChange} // Llamar a la función handleFilterChange cuando el valor del campo de búsqueda cambia
        ></input>
      </label>
    </FormStyled>
  );
};


