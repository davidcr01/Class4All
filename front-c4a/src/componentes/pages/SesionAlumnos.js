import '../../styles.css'
import React, { useState, useEffect } from 'react'

import Header from '../Layout/Header.js';
import Alumnos from '../Layout/Alumnos';
import { useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { isCookieSet } from '../../interfazCookies/cookies';
import CargandoProgress from '../Layout/CargandoProgress';
import { FlechasPaginacionGenerico } from '../flechasPaginacionGenerico';

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
            const url = "http://localhost:3900/api/usuarios/alumnos/"+location.state.aula;
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
      
      setCargando(false);
    });
  }, []);



    if(location.state === null)
      return (
        <div>
          <h1>AULA INVALIDA</h1>
        </div>
      )
    else{
      if(cargando)
        return <CargandoProgress/>
      
        else if(cookies.get("loginCookie") === undefined || !isSet){
          const increment = 4;
          const alumnosVisibles = alumnos.slice(index, index+increment);
      return (
        <>
        <Header titulo="Inicio De Sesión"/>
        <FlechasPaginacionGenerico currentIndex={index} setCurrentIndex={setIndex} length={alumnos.length} increment={increment}/>
        <Alumnos alumnos={alumnosVisibles}/>
      </>)
        }
      else
        return (
          <div>
            <h1>EL USUARIO YA HA INICIADO SESION</h1>
          </div>
        )
    }
};

//export default SesionAlumnos;
