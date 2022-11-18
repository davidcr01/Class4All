import '../../../styles.css'
import React from 'react'
import Header from '../../compartido/Layout/Header.js';
import Footer from '../../compartido/Layout/Footer.js';
import Profesores from '../../compartido/Layout/Profesores';

// Vista: compartida profs y admins

export const SesionProfesores = () => {
  return (
    <>
    <Header titulo="Inicio De Sesión"/>
    <Profesores/>
    <Footer/>
  </>)
};