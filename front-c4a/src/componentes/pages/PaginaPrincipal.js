import '../../styles.css'
import React from 'react'
import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
import Body from '../Layout/Body.js';
import { MuiBreadcrumbs } from '../muibreadcrumbs';
import PantallasUsuario from '../Layout/PantallasUsuario';
const PaginaPrincipal = () => {
  return (
    <>
    <Header titulo="Página Principal"/>
    {/* <MuiBreadcrumbsPP /> */}
    <PantallasUsuario/>
    <Footer/>
  </>)
};

export default PaginaPrincipal;
