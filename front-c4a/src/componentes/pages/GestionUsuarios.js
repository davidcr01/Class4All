import '../../styles.css'
import React from 'react'
import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
import { MuiBreadcrumbsGUS } from '../muibreadcrumbs';
import PantallaGestionUsuarios from '../Layout/PantallaGestionUsuarios';

export const GestionUsuarios = () => {
  

  return (
      <>
        <Header titulo="Gestión de Usuarios" />
        <MuiBreadcrumbsGUS/>
        <PantallaGestionUsuarios/>
        <Footer />
      </>)
  
};

//export default GestionTareasSinAsignar;
