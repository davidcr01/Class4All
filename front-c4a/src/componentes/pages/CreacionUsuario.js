import '../../styles.css'
import React from 'react'
import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
import { MuiBreadcrumbsCUS } from '../muibreadcrumbs';
import FormularioNuevoUsuario from '../Layout/FormularioNuevoUsuario';

export const CreacionUsuario = () => {
  

  return (
      <>
        <Header titulo="Nuevo Usuario" />
        <MuiBreadcrumbsCUS/>
        <FormularioNuevoUsuario/>
        <Footer />
      </>)
  
};

