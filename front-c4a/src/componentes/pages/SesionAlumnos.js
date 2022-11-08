import '../../styles.css'
import React, { useState, useEffect } from 'react'

import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
import Alumnos from '../Layout/Alumnos';
import { useLocation } from 'react-router-dom';

export const SesionAlumnos = (props) => {
  const location = useLocation(); //Obtengo la clase elegida de la anterior pagina

  //alert(location.state === null);   //Si es null el state significa que sacamos la pagina por defecto



    if(location.state === null)
      return (
        <div>
          <h1>AULA INVALIDA</h1>
        </div>
      )
    else{
      //alert("aula antes: "+location.state.aula)
      return (
        <>
        <Header titulo="Inicio De Sesión"/>
        {/* <MuiBreadcrumbsPP /> */}
        <Alumnos aula={location.state.aula}/>
        <Footer/>
      </>)
    }
};

//export default SesionAlumnos;
