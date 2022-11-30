import '../styles.css'
import React, {useState, useEffect} from 'react'
import Header from '../../compartido/Layout/Header';
import PantallaTareas from '../../compartido/Layout/Tareas/PantallaTareas.js';
import Cookies from 'universal-cookie';
import { isCookieSet } from '../../../interfaces/cookies';
import CargandoProgress from '../../compartido/Layout/CargandoProgress';

// Vista: alumno

export const Tareas = () => {
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

    if (cookies.get("loginCookie") !== undefined && cookieSet)  {
    return (
      <>
        <Header titulo="Tareas" alumnos="si" url_anterior="/"/>
        <PantallaTareas />
      </>)
    }
      else
      return (
        <h1>No tiene permiso para ver esta página</h1>
      )
  }
}