import '../styles.css'
import React from 'react'
import Header from '../../compartido/Layout/Header.js';
import Footer from '../../compartido/Layout/Footer.js';
import Profesores from '../../compartido/Layout/Profesores';

// Vista: compartida profs y admins
// Página para el inicio de sesión de admins y profes

export const SesionProfesores = () => {
  return (
    <>
    <Header titulo="Inicio De Sesión" alumnos="principal-admins"/>
    <Profesores/>
    <Footer/>
  </>)
};