import React from 'react';
import { Title } from './Section.styled';
import PropTypes from 'prop-types';

// Componente renderiza una sección con un título y contenido

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
