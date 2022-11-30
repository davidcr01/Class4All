import '../styles.css'
import React, { useState, useEffect } from 'react'
import Header from '../../compartido/Layout/Header.js';
import ClasesComandas from '../Layout/ClasesComandas';
import Cookies from "universal-cookie";
import { isCookieSet } from '../../../interfaces/cookies';
import CargandoProgress from '../../compartido/Layout/CargandoProgress';
import { FlechasPaginacionGenerico } from '../../flechasPaginacionGenerico';
import { useParams } from "react-router-dom"
import { getAulasRestantes } from '../../../interfaces/aulasRestantes';

// Vista: compartida

export const ComandasClases = () => {

  const { id } = useParams();
  const cookies = new Cookies();
  const [cargando, setCargando] = useState(true);
  const [isSet, setIsSet] = useState(false);
  const [aulas, setAulas] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    isCookieSet().then((res) => {
      setIsSet(res);
      setCargando(false);

      getAulasRestantes(id).then((res) => {
        setCargando(false);
        setAulas(res);
      });
    });
  }, []);

  if (cargando)
    return (
      <CargandoProgress />
    )

  else if(cookies.get("loginCookie") !== undefined && isSet){
    const increment = 4;
    const aulasVisibles = aulas.slice(index, index + increment);
    const aulasLength = (aulas === undefined) ? 0 : aulas.length;

    if (aulasLength > 0)
      return (
        <>
          <Header titulo="Comandas" alumnos="si" url_anterior="/Agenda"/>
          <FlechasPaginacionGenerico currentIndex={index} setCurrentIndex={setIndex} length={aulasLength} increment={increment} />
          <ClasesComandas aulas={aulasVisibles} id={id}/>
        </>
      );

    else
      return (
        <>
          <Header titulo="Comandas" />
          <h1>Tarea completada. Enhorabuena</h1>
        </>
      )
  }
  else{
    return (
      <>
      <h1>NO TIENES PERMISO PARA ACCEDER A ESTA PAGINA</h1>
      </>
    )
  }

};