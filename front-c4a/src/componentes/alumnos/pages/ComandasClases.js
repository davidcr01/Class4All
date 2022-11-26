import '../styles.css'
import React, { useState, useEffect } from 'react'
import Header from '../../compartido/Layout/Header.js';
import ClasesComandas from '../Layout/ClasesComandas';
import Cookies from "universal-cookie";
import { isCookieSet } from '../../../interfaces/cookies';
import CargandoProgress from '../../compartido/Layout/CargandoProgress';
import { FlechasPaginacionGenerico } from '../../flechasPaginacionGenerico';

// Vista: compartida

export const ComandasClases = () => {

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
          console.log(url);
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

        if (data.status === "success")
          setAulas(data.aulas);
      })
    });
  }, []);

  if (cargando)
    return (
      <CargandoProgress />
    )

  /* else if(cookies.get("loginCookie") !== undefined && isSet){
    return (
      <div>
        <h1>SESION YA INICIADA</h1>
      </div>
    )
  } */
  else {
    const increment = 4;
    const aulasVisibles = aulas.slice(index, index + increment);
    const aulasLength = (aulas === undefined) ? 0 : aulas.length;

    if (aulasLength > 0)
      return (
        <>
          <Header titulo="Comandas" alumnos="si" url_anterior="/Agenda"/>
          <FlechasPaginacionGenerico currentIndex={index} setCurrentIndex={setIndex} length={aulasLength} increment={increment} />
          <ClasesComandas aulas={aulasVisibles} />
        </>
      );

    else
      return (
        <>
          <Header titulo="Comandas" />
          <h1>NO HAY CLASES EN EL SISTEMA</h1>
        </>
      )
  }

};