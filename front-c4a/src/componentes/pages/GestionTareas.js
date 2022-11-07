import '../../styles.css'
import React from 'react'
import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
import { MuiBreadcrumbsGTS } from '../muibreadcrumbs';
import PantallaGestionTareas from '../Layout/PantallaGestionTareas';

export class GestionTareas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tipo: "asignada"
    }
  }

  cambiarEstado = (estado) => {
      this.setState({tipo: estado})

  }

  render() {
    return (
      <>
        <Header titulo="Gestión de tareas" />
        <MuiBreadcrumbsGTS tipo={this.state.tipo}/>
        <PantallaGestionTareas cambio={this.cambiarEstado} tipo={this.state.tipo} />
        <Footer />
      </>)
  }
};

//export default GestionTareasSinAsignar;
