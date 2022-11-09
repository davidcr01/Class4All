import '../../styles.css'
import React, { useEffect, useState } from 'react'
import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
import PantallasUsuario from '../Layout/PantallasUsuario';
import { isCookieSet } from '../../interfazCookies/cookies';
import Cookies from 'universal-cookie';
import CargandoProgress from '../Layout/CargandoProgress';

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
      <Header titulo="Página Principal"/>
      {/* <MuiBreadcrumbsPP /> */}
      <PantallasUsuario/>
      <Footer/>
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

//export default PaginaPrincipal;
