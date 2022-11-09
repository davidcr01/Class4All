import '../../styles.css'
import React, {useState, useEffect} from 'react'
import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
import Body from '../Layout/Body.js';
import { MuiBreadcrumbs } from '../muibreadcrumbs';
import Clases from '../Layout/Clases';
import Cookies from "universal-cookie";
import { isCookieSet } from '../../interfazCookies/cookies';
import CargandoProgress from '../Layout/CargandoProgress';

export const SesionAlumnosClases = () => {

  const cookies = new Cookies();
  const [cargando, setCargando] = useState(true);
  const [isSet, setIsSet] = useState(false);

  useEffect(() => {
    isCookieSet().then((res) => {
      setIsSet(res);
      setCargando(false);
    });
  }, []);

  if(cargando)
    return (
      <CargandoProgress/>
    )

    else if(cookies.get("loginCookie") !== undefined && isSet){
      return (
        <div>
          <h1>SESION YA INICIADA</h1>
        </div>
      )      
    }
  else
  return (
    <>
    <Header titulo="Inicio De Sesión"/>
    {/* <MuiBreadcrumbsPP /> */}
    <Clases/>
    <Footer/>
  </>)

};

//export default SesionAlumnosClases;
