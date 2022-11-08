import '../../styles.css'
import React from 'react'
import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
import { MuiBreadcrumbsGTS } from '../muibreadcrumbs';
import PantallaTareas from '../Layout/PantallaTareas.js';

export class Tareas extends React.Component {

  render() {
    return (
      <>
        <Header titulo="Tareas" />
        {/* <MuiBreadcrumbsPP /> */}
        <PantallaTareas />
        <Footer />
      </>)
  }
};

//export default GestionTareasSinAsignar;
