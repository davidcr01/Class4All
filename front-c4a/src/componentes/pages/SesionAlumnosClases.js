import '../../styles.css'
import React from 'react'
import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
import Body from '../Layout/Body.js';
import { MuiBreadcrumbs } from '../muibreadcrumbs';
import Clases from '../Layout/Clases';

export const SesionAlumnosClases = () => {
  return (
    <>
    <Header titulo="Inicio De Sesión"/>
    {/* <MuiBreadcrumbsPP /> */}
    <Clases/>
    <Footer/>
  </>)
};

//export default SesionAlumnosClases;
