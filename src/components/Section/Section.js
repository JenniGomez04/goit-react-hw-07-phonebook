import React from 'react';
import { Title } from './Section.styled';
import PropTypes from 'prop-types';

// Renderizar el título de la sección utilizando el componente 'Title y el contenido.
// {children} Renderizar el contenido de la sección.

export const Section = ({ title, children }) => {
  return (
    <div>
      <Title>{title}</Title>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
