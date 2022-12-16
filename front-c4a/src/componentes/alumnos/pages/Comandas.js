import '../styles.css'
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react'
import Header from '../../compartido/Layout/Header.js';
import Menus from '../Layout/Menus';
import Cookies from "universal-cookie";
import { useLocation, useNavigate } from 'react-router-dom';
import { isCookieSet } from '../../../interfaces/cookies';
import CargandoProgress from '../../compartido/Layout/CargandoProgress';
import { FlechasPaginacionGenerico } from '../../flechasPaginacionGenerico';
import { useParams } from 'react-router-dom';
import { sendMenu, setAulaCompletada } from '../../../interfaces/aulasRestantes';

// Vista: compartida
// Página para mostrar la gestión de las comandas

export const Comandas = ({ aula }) => {

  const { id } = useParams();
  const location = useLocation();
  const url_ant = `/comanda/${id}`;
  const cookies = new Cookies();
  const [cargando, setCargando] = useState(true);
  const [isSet, setIsSet] = useState(false);
  const [menus, setMenus] = useState([]);
  const [index, setIndex] = useState(0);
  const [menusTodasClases, setMenusTodasClases] = useState(location.state.menus);
  const [aulasCompletadas, setAulasCompletadas] = useState(location.state.aulasCompletadas);


  const nav = useNavigate();

  useEffect(() => {
    isCookieSet().then((res) => {
      setIsSet(res);

      const getMenus = async () => {
        try {
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
        if (data.status === "success") {
          setMenus(data.menus);
        }

        setCargando(false);

      })
    });
  }, []);





  if (cargando)
    return (
      <CargandoProgress />
    )

  else if (cookies.get("loginCookie") !== undefined && isSet) {
    // Se muestran los menús de 2 en dos, y sus respectivas cantidades (en total 4 componentes en pantalla)
    const increment = 2;
    const menusVisibles = menus.slice(index, index + increment);
    let menusLength = (menus === undefined) ? 0 : menus.length;

    //menusLength = (menusLength % increment === 0) ? menusLength+1 : menusLength + (menusLength % increment) + 1;

    if (menusLength % increment === 0) {
      menusLength++;
    }
    else if (menusLength < increment === 0) {
      menusLength = increment + 1;
    }
    else {
      let i = 0;

      while (menusLength > i * increment) {
        i++;
      }

      menusLength = i * increment + 1;
    }

    if (menusLength > 0) {

      // Si estamos en la última página, mostrar el botoón de enviar
      if (index === menusLength - 1) {
        const sendListado = () => {
          let aux = [...aulasCompletadas];
          aux[location.state.nroAula] = true;
          nav(url_ant, { state: { menus: menusTodasClases, aulasCompletadas: aux } });
        }

        return (
          <>
            <Header botonAtras={false} titulo={"Comandas clase " + location.state.aula} alumnos="si" url_anterior={url_ant} />
            <FlechasPaginacionGenerico currentIndex={index} setCurrentIndex={setIndex} length={menusLength} increment={increment} />
            <section className='contenedorBoton'>
              <Button variant="outlined" sx={{ fontSize: 35, borderRadius: 5 }} className='botonEnviarMenus' onClick={sendListado}>Guardar</Button>
            </section>
          </>
        );
      }
      // Si no, mostrar las cantidades y los mneús.
      else {
        return (
          <>
            <Header botonAtras={false} titulo={"Comandas clase " + location.state.aula} alumnos="si" url_anterior={url_ant} />
            <FlechasPaginacionGenerico currentIndex={index} setCurrentIndex={setIndex} length={menusLength} increment={increment} />
            <div className="cuerpo">
              <div className="recuadrosmenus">
                <Menus menus={menusVisibles} /*cantidades={conteoCantidades} setCantidades={setConteoCantidades}*/ currentAula={location.state.nroAula} allMenus={menusTodasClases} setAllMenus={setMenusTodasClases} currentIndex={index} />
              </div>
            </div>
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
  else {
    return (
      <>
        <h1>NO TIENES PERMISO PARA ACCEDER</h1>
      </>
    )
  }

};