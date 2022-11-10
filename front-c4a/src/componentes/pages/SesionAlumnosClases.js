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
import { FlechasPaginacionGenerico } from '../flechasPaginacionGenerico';

export const SesionAlumnosClases = () => {

  const cookies = new Cookies();
  const [cargando, setCargando] = useState(true);
  const [isSet, setIsSet] = useState(false);
  const [aulas, setAulas] = useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    isCookieSet().then((res) => {
      setIsSet(res);
      setCargando(false);

      const getAulas = async () => {
        try {
            //alert("cookie cookie: "+cookies.get("loginCookie"));
            const url = "http://localhost:3900/api/usuarios/aulas/";
            console.log(url);
            const res = await fetch(url)
            const data = await res.json();
    
            return data;
            
        } catch (error) {
            console.log(error);
    
            return undefined;
        }              
    }

    getAulas().then((data)=>{
        setCargando(false);

        if(data.status === "success")
            setAulas(data.aulas);
    })      
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
  else{
    //alert(index);
  return (
    <>
    <Header titulo="Inicio De Sesión"/>
    {/* <MuiBreadcrumbsPP /> */}
    <FlechasPaginacionGenerico currentIndex={index} setCurrentIndex={setIndex} length={aulas.length} increment={1}/>
    <Clases aulas={aulas}/>
  </>)
  }

};

//export default SesionAlumnosClases;
