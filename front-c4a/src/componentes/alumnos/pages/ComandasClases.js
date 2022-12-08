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

  const [cantidadMenuAula, setCantidadMenuAula] = useState (undefined); //Filas: clase Columnas: Menu
  const [aulasCompletadas, setAulasCompletadas] = useState(false);  //true: enviada, pero se puede seguir cambiando / false: no enviado
  
  useEffect(() => {
    isCookieSet().then((res) => {
      setIsSet(res);
      setCargando(false);

      getAulasRestantes(id).then((res) => {
        const getMenus = async () => {
          try {
            //alert("cookie cookie: "+cookies.get("loginCookie"));
            const url = "http://localhost:3900/api/menus/lista-menu";
            console.log(url);
            const res = await fetch(url)
            const data = await res.json();
  
            return data;
  
          } catch (error) {
            console.log(error);
  
            return undefined;
          }
        }
        
        getMenus().then((menus) => {
          setCargando(false);
          setAulas(res);
          setCantidadMenuAula(Array(res.length).fill().map(() => Array(menus.menus.length).fill(0)))
        });
      });
    });
  }, []);

  if (cargando)
    return (
      <CargandoProgress />
    )

  else if(cookies.get("loginCookie") !== undefined && isSet){
    //alert(JSON.stringify(cantidadMenuAula));
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
          <Header titulo="Comandas" alumnos="si" url_anterior="/Agenda"/>
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