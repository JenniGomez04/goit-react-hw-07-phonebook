import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { filterContacts } from 'redux/filterSlice';
import { FormStyled } from './Form.styled';

// Se encarga de manejar el filtro de busqueda de los contactos.

export const Filter = () => {
  const dispatch = useDispatch();

// Maneja el cambio en el campo de filtro y despacha la acción para filtrar los contactos

  const handleFilterChange = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <FormStyled>
      <label>
        Find contacts by name
        <input
          type="text"
          name="name"
          onChange={handleFilterChange}
        ></input>
      </label>
    </FormStyled>
  );
};


