import '../../styles.css'
import React, { useState, useEffect } from 'react'
import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
import { MuiBreadcrumbs } from '../muibreadcrumbs';
import PantallasGestion from '../Layout/PantallasGestion';
import { isCookieSet } from '../../interfazCookies/cookies';
import Cookies from 'universal-cookie';

export const Gestion = () => {
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
      <div>
        <h1>CARGANDO...</h1>
      </div>
    )
  }
  else {
    const cookies = new Cookies();

    if (cookies.get("loginCookie") !== undefined && cookieSet)
      return (
        <>
          <Header titulo="Gestión del centro" />
          <MuiBreadcrumbs />
          <PantallasGestion />
          <Footer />
        </>)

    else
      return (
        <h1>No tiene permiso para ver esta página</h1>
      )
  }
};

//export default Gestion;
