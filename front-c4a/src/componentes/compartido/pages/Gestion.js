import '../../../styles.css'
import React, { useState, useEffect } from 'react'
import Header from '../../compartido/Layout/Header.js';
import Footer from '../../compartido/Layout/Footer.js';
import { MuiBreadcrumbs } from '../../muibreadcrumbs';
import PantallasGestion from '../../compartido/Layout/PantallasGestion';
import { isCookieSet } from '../../../interfazCookies/cookies';
import Cookies from 'universal-cookie';
import CargandoProgress from '../../compartido/Layout/CargandoProgress';

// Vista: compartida entre admins y profs

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


  if (cargando) {
    return (
      <CargandoProgress/>
    )
  }
  else {
    const cookies = new Cookies();

    const rightRole = () => {
      let res = false;
      const cookieInfo = cookies.get("loginCookie");
      if(cookieInfo.rol === "Administrador" || cookieInfo.rol === "Profesor")
        res=true;

        return res;
    }

    if (cookies.get("loginCookie") !== undefined && cookieSet && rightRole())
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