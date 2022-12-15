import '../styles.css'
import React, { useEffect, useState } from 'react'
import Header from '../../compartido/Layout/Header';
import PantallasUsuario from '../../alumnos/Layout/PantallasUsuario';
import { getCookie, isCookieSet } from '../../../interfaces/cookies';
import Cookies from 'universal-cookie';
import setTams from '../../../interfaces/tamaños';

import CargandoProgress from '../../compartido/Layout/CargandoProgress';

// Vista: alumno

export const PaginaPrincipal = () => {
  const cookies = new Cookies();

  const [cargando, setCargando] = useState(true);
  const [isSet, setIsSet] = useState(false);

  useEffect(() => {
    isCookieSet().then((response) => {
      setCargando(false);
      setIsSet(response);
      // setTams(cookies.get("tams").tamañoLetra)
    })
  }, []);


  if(cargando)
  return (
    <CargandoProgress/>
  );

  else{

    if(cookies.get("loginCookie") !== undefined && isSet){
    return (
      <>
      <Header titulo="Página Principal" alumnos="si" botonAtras={false}/>
      <PantallasUsuario/>
    </>)
    }

    else{
      return (
        <div>
          <h1>NO TIENES PERMISO PARA VER LA PAGINA</h1>
        </div>
      )
    }
  }
};