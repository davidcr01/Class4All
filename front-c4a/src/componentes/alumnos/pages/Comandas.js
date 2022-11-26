import '../styles.css'
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react'
import Header from '../../compartido/Layout/Header.js';
import Menus from '../Layout/Menus';
import Cookies from "universal-cookie";
import { useLocation } from 'react-router-dom';
import { isCookieSet } from '../../../interfaces/cookies';
import CargandoProgress from '../../compartido/Layout/CargandoProgress';
import { FlechasPaginacionGenerico } from '../../flechasPaginacionGenerico';
import { useParams } from 'react-router-dom';

// Vista: compartida

export const Comandas = ({aula}) => {

  const { id } = useParams();
  const url_ant = `/comanda/${id}`;
  const cookies = new Cookies();
  const [cargando, setCargando] = useState(true);
  const [isSet, setIsSet] = useState(false);
  const [menus, setMenus] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    isCookieSet().then((res) => {
      setIsSet(res);
      setCargando(false);

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

      getMenus().then((data) => {
        setCargando(false);

        if (data.status === "success")
          setMenus(data.menus);
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
    const increment = 2;
    const menusVisibles = menus.slice(index, index + increment);
    const menusLength = (menus === undefined) ? 0 : menus.length+1;

    if (menusLength > 0)
    {
      const location = useLocation();

      if (index === menusLength-1){
        return (
          <>
            <Header titulo={"Comandas clase " + location.state.aula} alumnos="si" url_anterior={url_ant}/>
            <FlechasPaginacionGenerico currentIndex={index} setCurrentIndex={setIndex} length={menusLength} increment={increment} />
            <section className='contenedorBoton'>
              <Button variant="outlined" sx={{fontSize: 35, borderRadius: 5}} className='botonEnviarMenus'>Enviar</Button>
            </section>
          </>
        );
      }
      else {
        return (
          <>
            <Header titulo={"Comandas clase " + location.state.aula} alumnos="si" url_anterior={url_ant}/>
            <FlechasPaginacionGenerico currentIndex={index} setCurrentIndex={setIndex} length={menusLength} increment={increment} />
            <Menus menus={menusVisibles} />

          </>
        );
      }

    }
    else
      return (
        <>
          <Header titulo={"Comandas clase"} />
          <h1>NO HAY MENUS EN EL SISTEMA</h1>
        </>
      )
  }

};