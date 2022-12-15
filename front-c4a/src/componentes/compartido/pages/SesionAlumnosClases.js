import '../styles.css'
import React, { useState, useEffect } from 'react'
import Header from '../../compartido/Layout/Header.js';
import Clases from '../../alumnos/Layout/Clases';
import Cookies from "universal-cookie";
import { isCookieSet } from '../../../interfaces/cookies';
import CargandoProgress from '../../compartido/Layout/CargandoProgress';
import { FlechasPaginacionGenerico } from '../../flechasPaginacionGenerico';

// Vista: compartida
// Página de inicio de sesión que muestra las clases del sistema

export const SesionAlumnosClases = () => {

  const cookies = new Cookies();
  const [cargando, setCargando] = useState(true);
  const [isSet, setIsSet] = useState(false);
  const [aulas, setAulas] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    isCookieSet().then((res) => {
      setIsSet(res);
      setCargando(false);

      const getAulas = async () => {
        try {
          //alert("cookie cookie: "+cookies.get("loginCookie"));
          const url = "http://localhost:3900/api/usuarios/lista-aulas/";
          //console.log(url);
          const res = await fetch(url)
          const data = await res.json();

          return data;

        } catch (error) {
          console.log(error);

          return undefined;
        }
      }

      getAulas().then((data) => {
        setCargando(false);

        if (data !== undefined && data.status === "success")
          setAulas(data.aulas);
      })
    });
  }, []);

  if (cargando)
    return (
      <CargandoProgress />
    )
  else{
    const increment = 4;
    const aulasVisibles = aulas.slice(index, index + increment);
    const aulasLength = (aulas === undefined) ? 0 : aulas.length;

    if (aulasLength > 0)
      return (
        <>
          <Header titulo="Inicio De Sesión" alumnos="principal"/>
          <FlechasPaginacionGenerico currentIndex={index} setCurrentIndex={setIndex} length={aulasLength} increment={increment} />
          <Clases aulas={aulasVisibles} />
        </>
      );

    else
      return (
        <>
          <Header titulo="Inicio De Sesión" />
          <h1>NO HAY CLASES EN EL SISTEMA</h1>
        </>
      )
  }

};