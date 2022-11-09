import '../../styles.css'
import React from 'react'
import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
import PantallasUsuario from '../Layout/PantallasUsuario';

export const PaginaPrincipal = () => {
  return (
    <>
    <Header titulo="Página Principal"/>
    {/* <MuiBreadcrumbsPP /> */}
    <PantallasUsuario/>
    <Footer/>
  </>)
};

//export default PaginaPrincipal;
