import '../styles.css'
import React, { useState, useEffect } from 'react'
import Header from '../../compartido/Layout/Header.js';
import Alumnos from '../../alumnos/Layout/Alumnos';
import { useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { isCookieSet } from '../../../interfaces/cookies';
import CargandoProgress from '../../compartido/Layout/CargandoProgress';
import { FlechasPaginacionGenerico } from '../../flechasPaginacionGenerico';

// Vista: alumnos
// Página para mostrar los alumnos una vez se accede a una clase, es decir, muestra
// los alumnos asociados a una clase

export const SesionAlumnos = (props) => {
  const location = useLocation(); //Obtengo la clase elegida de la anterior pagina

  const [isSet, setIsSet] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [alumnos, setAlumnos] = useState([]);
  const [index, setIndex] = useState(0);
  const cookies = new Cookies();

  useEffect(() => {
    isCookieSet().then((response) => {
      setIsSet(response);

      const getAlumnos = async () => {
        try {
          const url = "http://localhost:3900/api/usuarios/get-alumnos-aula/" + location.state.aula;
          console.log(url);
          const res = await fetch(url)
          const data = await res.json();

          return data;

        } catch (error) {
          console.log(error);

          return undefined;
        }
      }

      getAlumnos().then((response) => {
        setAlumnos(response.alumnos);
        setCargando(false);
      })
    });
  }, []);

  if (location.state === null)
    return (
      <div>
        <h1>AULA INVALIDA</h1>
      </div>
    )
  else {
    if (cargando)
      return <CargandoProgress />

    else if (cookies.get("loginCookie") === undefined || !isSet) {
      const increment = 4;
      const alumnosVisibles = (alumnos === undefined) ? undefined : alumnos.slice(index, index + increment);
      const alumnosLength = (alumnos === undefined) ? 0 : alumnos.length;

      if (alumnosLength > 0)
        return (
          <>
            <Header titulo="Inicio De Sesión" alumnos="principal-alumnos" url_anterior="/"/>
            <FlechasPaginacionGenerico currentIndex={index} setCurrentIndex={setIndex} length={alumnosLength} increment={increment} />
            <Alumnos alumnos={alumnosVisibles} />
          </>)

      else
        return (
          <>
            <Header titulo="Inicio De Sesión" />
            <h1>NO HAY ALUMNOS EN ESTA CLASE</h1>
          </>
        );
    }
    else
      return (
        <div>
          <h1>EL USUARIO YA HA INICIADO SESION</h1>
        </div>
      )
  }
};