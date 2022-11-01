import '../../styles.css'
import React from 'react'
import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
import Body from '../Layout/Body.js';
import { MuiBreadcrumbsGTS } from '../muibreadcrumbs';
import PantallaGestionTareas from '../Layout/PantallaGestionTareas';

export const GestionTareasSinAsignar = () => {
  return (
    <>
    <Header titulo="Gestión de tareas"/>
    <MuiBreadcrumbsGTS />
    <PantallaGestionTareas/>
    <Footer/>
  </>)
};

//export default GestionTareasSinAsignar;
