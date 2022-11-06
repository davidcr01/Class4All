import '../../styles.css'
import React from 'react'
import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
import Body from '../Layout/Body.js';
import { MuiBreadcrumbsGTS } from '../muibreadcrumbs';
import PantallaGestionTareas from '../Layout/PantallaGestionTareas';

export class GestionTareas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tipo: "Todas"
    }
  }

  render() {
    return (
      <>
        <Header titulo="Gestión de tareas" />
        <MuiBreadcrumbsGTS tipo={this.state.tipo}/>
        <PantallaGestionTareas tipo={this.state.tipo} />
        <Footer />
      </>)
  }
};

//export default GestionTareasSinAsignar;
