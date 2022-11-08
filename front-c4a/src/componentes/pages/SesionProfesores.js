import '../../styles.css'
import React from 'react'
import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
import Profesores from '../Layout/Profesores';

export const SesionProfesores = () => {
  return (
    <>
    <Header titulo="Inicio De Sesión"/>
    {/* <MuiBreadcrumbsPP /> */}
    <Profesores/>
    <Footer/>
  </>)
};

//export default SesionProfesores;
