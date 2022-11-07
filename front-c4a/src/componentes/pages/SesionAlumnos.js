import '../../styles.css'
import React from 'react'
import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
import Body from '../Layout/Body.js';
import { MuiBreadcrumbs } from '../muibreadcrumbs';
import Alumnos from '../Layout/Alumnos';

export const SesionAlumnos = () => {
  return (
    <>
    <Header titulo="Inicio De Sesión"/>
    {/* <MuiBreadcrumbsPP /> */}
    <Alumnos/>
    <Footer/>
  </>)
};

//export default SesionAlumnos;
