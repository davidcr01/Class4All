import '../../styles.css'
import React, { useState, useEffect } from 'react'

import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
import Alumnos from '../Layout/Alumnos';
import { useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { isCookieSet } from '../../interfazCookies/cookies';
import CargandoProgress from '../Layout/CargandoProgress';

export const SesionAlumnos = (props) => {
  const location = useLocation(); //Obtengo la clase elegida de la anterior pagina

  const [isSet, setIsSet] = useState(false);
  const [cargando, setCargando] = useState(true);
  const cookies = new Cookies();

  useEffect(() => {
    isCookieSet().then((response) => {
      setIsSet(response);
      setCargando(false);
    });
  }, []);



    if(location.state === null)
      return (
        <div>
          <h1>AULA INVALIDA</h1>
        </div>
      )
    else{
      if(cargando)
        return <CargandoProgress/>
      
        else if(cookies.get("loginCookie") === undefined || !isSet)
      return (
        <>
        <Header titulo="Inicio De Sesión"/>
        {/* <MuiBreadcrumbsPP /> */}
        <Alumnos aula={location.state.aula}/>
        <Footer/>
      </>)
      else
        return (
          <div>
            <h1>EL USUARIO YA HA INICIADO SESION</h1>
          </div>
        )
    }
};

//export default SesionAlumnos;
