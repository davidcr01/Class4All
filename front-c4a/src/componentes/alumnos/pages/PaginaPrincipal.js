import '../styles.css'
import React, { useEffect, useState } from 'react'
import Header from '../../compartido/Layout/Header';
import PantallasUsuario from '../../alumnos/Layout/PantallasUsuario';
import { isCookieSet } from '../../../interfaces/cookies';
import Cookies from 'universal-cookie';
import CargandoProgress from '../../compartido/Layout/CargandoProgress';

// Vista: alumno

export const PaginaPrincipal = () => {
  const [cargando, setCargando] = useState(true);
  const [isSet, setIsSet] = useState(false);

  useEffect(() => {
    isCookieSet().then((response) => {
      setCargando(false);
      setIsSet(response);
    })
  }, []);


  if(cargando)
  return (
    <CargandoProgress/>
  );

  else{
    const cookies = new Cookies();

    const isRoleRight = () => {
      let res = false;
      const infoCookie = cookies.get("loginCookie");

      if(infoCookie.rol === "Alumno")
        res =true;

      return res;
    }

    if(cookies.get("loginCookie") !== undefined && isSet && isRoleRight()){
    return (
      <>
      <Header titulo="Página Principal" alumnos="si"/>
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