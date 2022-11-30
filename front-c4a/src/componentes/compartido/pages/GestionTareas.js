import '../styles.css'
import React, {useState, useEffect} from 'react'
import Header from '../../compartido/Layout/Header.js';
import Footer from '../../compartido/Layout/Footer.js';
import { MuiBreadcrumbsGTS } from '../../muibreadcrumbs';
import PantallaGestionTareas from '../../compartido/Layout/Tareas/PantallaGestionTareas';
import Cookies from 'universal-cookie';
import { isCookieSet } from '../../../interfaces/cookies';
import CargandoProgress from '../../compartido/Layout/CargandoProgress';

// Vista: compartida entre admins y profs

export const GestionTareas = () => {
  const [tipo, setTipo] = useState(() => "asignada");
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
        <Header titulo="Gestión de tareas" />
        <MuiBreadcrumbsGTS tipo={tipo}/>
        <PantallaGestionTareas cambio={setTipo} tipo={tipo} />
        <Footer />
        </>)

    else
      return (
        <h1>No tiene permiso para ver esta página</h1>
      )
  }
}

//export default GestionTareasSinAsignar;
