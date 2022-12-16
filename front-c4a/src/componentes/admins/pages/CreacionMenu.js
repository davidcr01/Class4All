import '../../../styles.css'
import React, {useState, useEffect} from 'react'
import Header from '../../compartido/Layout/Header.js';
import Footer from '../../compartido/Layout/Footer.js';
import { MuiBreadcrumbsCM } from '../../muibreadcrumbs';
import FormularioNuevoMenu from '../Layout/FormularioNuevoMenu';
import Cookies from 'universal-cookie';
import { isCookieSet } from '../../../interfaces/cookies';
import CargandoProgress from '../../compartido/Layout/CargandoProgress';

// Vista: admin
// Componente asociado a la página para crear Menú. Contiene
// entre otras cosas el componente del formulario de Nuevo menú.

export const CreacionMenu = () => {
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
          <Header titulo="Nuevo Menú" />
          <MuiBreadcrumbsCM />
          <FormularioNuevoMenu />
          <Footer />
        </>)
    else
      return (
        <h1>No tiene permiso para ver esta página</h1>
      )
  }

};

