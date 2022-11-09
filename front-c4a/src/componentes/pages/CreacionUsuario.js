import '../../styles.css'
import React, {useState, useEffect} from 'react'
import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
import { MuiBreadcrumbsCUS } from '../muibreadcrumbs';
import FormularioNuevoUsuario from '../Layout/FormularioNuevoUsuario';
import Cookies from 'universal-cookie';
import { isCookieSet } from '../../interfazCookies/cookies';
import CargandoProgress from '../Layout/CargandoProgress';

export const CreacionUsuario = () => {
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

    if (cookies.get("loginCookie") !== undefined && cookieSet)
      return (
        <>
          <Header titulo="Nuevo Usuario" />
          <MuiBreadcrumbsCUS />
          <FormularioNuevoUsuario />
          <Footer />
        </>)
    else
      return (
        <h1>No tiene permiso para ver esta página</h1>
      )
  }

};

