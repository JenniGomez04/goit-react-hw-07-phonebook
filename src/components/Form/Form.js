import React, { useState, useEffect } from 'react';
import { FormStyled } from '../Filter/Form.styled';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsList } from '../../redux/selectors';
import { addContactsThunk, getContactsThunk } from '../../redux/contacts-thunk';

export const Form = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(getContactsList);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

 // Obtener la lista de contactos al cargar el componente
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

// Manejar el cambio en los campos de nombre y teléfono
  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  // Manejar el envío del formulario
  const handleSubmit = e => {
    e.preventDefault();
    const contactExists = contactsList.find(contact => {
      return contact.name === name || contact.phone === phone;
    });

    if (contactExists) {
       // Mostrar una notificación si el contacto ya existe
      Report.info(
        '',
        `Contact with name ${name} and number ${phone} already exists`,
        'Okay'
      );
      resetForm();
       // Agregar el contacto si no existe
    } else if (!contactExists) {
      const contact = { id: nanoid(), name, phone };
      dispatch(addContactsThunk(contact));

      resetForm();
    } else {
      // Mostrar una notificación en caso de error
      Report.failure('', 'Error adding contact', 'Okay');
    }
  };

  // Reiniciar el formulario
  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <div>
      <FormStyled onSubmit={handleSubmit}>
        <label>
          Name
          <input
            className="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone
          <input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </FormStyled>
    </div>
  );
};

