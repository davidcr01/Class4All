import '../../styles.css'
import React, { useState, useEffect } from 'react'
import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
import { MuiBreadcrumbsGUS } from '../muibreadcrumbs';
import PantallaGestionUsuarios from '../Layout/PantallaGestionUsuarios';
import Cookies from 'universal-cookie';
import { isCookieSet } from '../../interfazCookies/cookies';
import CargandoProgress from '../Layout/CargandoProgress';

export const GestionUsuarios = () => {
  const [cargando, setCargando] = useState();
  const [cookieSet, setCookieSet] = useState();

  useEffect(() => {
    setCargando(true);
    setCookieSet(false);
    //Llamada para comprobar (quizas solo admin)
    isCookieSet().then((res) => {
      setCargando(false);
      setCookieSet(res);
    });
  }, []);

  if (cargando === true) {
    return (
      <CargandoProgress/>
    )
  }
  else {
    const cookies = new Cookies();

    if (cookies.get("loginCookie") !== undefined && cookieSet)
      return (
        <>
          <Header titulo="Gestión de Usuarios" />
          <MuiBreadcrumbsGUS />
          <PantallaGestionUsuarios />
          <Footer />
        </>
      )

    else
      return (
        <h1>No tiene permiso para ver esta página</h1>
      )
  }

};

//export default GestionTareasSinAsignar;
