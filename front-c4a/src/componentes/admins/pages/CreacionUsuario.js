import '../../../styles.css'
import React, {useState, useEffect} from 'react'
import Header from '../../compartido/Layout/Header.js';
import Footer from '../../compartido/Layout/Footer.js';
import { MuiBreadcrumbsCUS } from '../../muibreadcrumbs';
import FormularioNuevoUsuario from '../Layout/FormularioNuevoUsuario';
import Cookies from 'universal-cookie';
import { isCookieSet } from '../../../interfaces/cookies';
import CargandoProgress from '../../compartido/Layout/CargandoProgress';

// Vista: admin
// Componente asociado a la página para crear Usuarios. Contiene
// entre otras cosas el componente del formulario de Nuevo usuario.

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

