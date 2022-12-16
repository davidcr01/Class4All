import '../styles.css'
import React, { useState, useEffect } from 'react'
import Header from '../../compartido/Layout/Header.js';
import ClasesComandas from '../Layout/ClasesComandas';
import Cookies from "universal-cookie";
import { isCookieSet } from '../../../interfaces/cookies';
import CargandoProgress from '../../compartido/Layout/CargandoProgress';
import { FlechasPaginacionGenerico } from '../../flechasPaginacionGenerico';
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { getAulas, getAulasRestantes, sendMenu } from '../../../interfaces/aulasRestantes';
import Button from '@mui/material/Button';

// Vista: compartida
// Componente para mostrar todas las comandas de la tarea comandas.
// Gestiona la funcionalidad de marcar las clases como completadas

export const ComandasClases = () => {

  const location = useLocation();
  const { id } = useParams();
  const cookies = new Cookies();
  const [cargando, setCargando] = useState(true);
  const [isSet, setIsSet] = useState(false);
  const [aulas, setAulas] = useState([]);
  const [index, setIndex] = useState(0);
  const [menusInfo, setMenusInfo] = useState([]);
  const nav =useNavigate();
  let valorCantidadMenuAula = [];   //si se ponen a undefined no van, npi la verdad
  let valorAulasCompletadas = [];   //si se ponen a undefined no van, npi la verdad

  if (location.state !== null) {
    //alert("fumop")
    valorCantidadMenuAula = location.state.menus;
    valorAulasCompletadas = location.state.aulasCompletadas
  }

  const [cantidadMenuAula, setCantidadMenuAula] = useState(valorCantidadMenuAula); //Filas: clase Columnas: Menu
  const [aulasCompletadas, setAulasCompletadas] = useState(valorAulasCompletadas);  //true: enviada, pero se puede seguir cambiando / false: no enviado

  useEffect(() => {
    isCookieSet().then((res) => {
      setIsSet(res);
      setCargando(false);

      getAulas(id).then((res) => {
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
        setAulas(res);

        getMenus().then((menus) => {
          if (location.state === null) {
            setCantidadMenuAula(Array(res.length).fill().map(() => Array(menus.menus.length).fill(0)));
            setAulasCompletadas(Array(res.length).fill(false));
          }
          setMenusInfo(menus.menus);
        });

        setCargando(false);
      });
    });
  }, []);


  if (cargando)
    return (
      <CargandoProgress />
    )

  else if (cookies.get("loginCookie") !== undefined && isSet) {
    const todasLasComandasRealizadas = () => {
      let realizadas = true;

      for (let i = 0; i < aulasCompletadas.length && realizadas; i++) {
        if (!aulasCompletadas[i])
          realizadas = false;
      }

      return realizadas;
    }

    const increment = 4;
    const aulasVisibles = aulas.slice(index, index + increment);
    let aulasLength = (aulas === undefined) ? 0 : aulas.length;

    if (todasLasComandasRealizadas()) {
      if (aulasLength % increment === 0) {
        aulasLength++;
      }
      else if (aulasLength < increment === 0) {
        aulasLength = increment + 1;
      }
      else {
        let i = 0;

        while (aulasLength > i * increment) {
          i++;
        }

        aulasLength = i * increment + 1;
      }
    }

    if (aulasLength > 0) {
      const sendComanda = () => {
        let totalComandas = Array(aulasCompletadas.length).fill(0);

        for (let i = 0; i < cantidadMenuAula[0].length; i++) {
          let aux = 0;
          for (let j = 0; j < cantidadMenuAula.length; j++) {
            aux += cantidadMenuAula[j][i];
          }
          totalComandas[i] = { menu: menusInfo[i]._id, cantidad: aux };
        }

        sendMenu(id, totalComandas);

        const url = "http://localhost:3900/api/tareas/completar-tarea-alumno/"+id;
        fetch(url, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json"
          },
          //body: JSON.stringify({cantidades: menu})
        }).then((data) => data.json())
        .then((msg) => {
          console.log(JSON.stringify(msg))
          nav("/Agenda");
        })
        .catch((error) => console.error(error));
      }

      return (
        <>
          <Header titulo="Comandas" alumnos="si" url_anterior="/Agenda" />
          <FlechasPaginacionGenerico currentIndex={index} setCurrentIndex={setIndex} length={aulasLength} increment={increment} />

          {(index !== aulasLength - 1 &&
            <ClasesComandas baseIndex={index} aulas={aulasVisibles} id={id} menus={cantidadMenuAula} setMenus={setCantidadMenuAula} aulasCompletadas={aulasCompletadas} setAulasCompletadas={setAulasCompletadas} isSend={todasLasComandasRealizadas() ? true : false} />
          )}


          {(index === aulasLength - 1 && todasLasComandasRealizadas() &&
            <section className='contenedorBoton'>
              <Button variant="outlined" sx={{ fontSize: 35, borderRadius: 5 }} className='botonEnviarMenus' onClick={sendComanda}>Enviar</Button>
            </section>
          )
          }
        </>
      );
    }

    else
      return (
        <>
          <Header titulo="Comandas" alumnos="si" url_anterior="/Agenda" />
          <h1>Tarea completada. Enhorabuena</h1>
        </>
      )
  }
  else {
    return (
      <>
        <h1>NO TIENES PERMISO PARA ACCEDER A ESTA PAGINA</h1>
      </>
    )
  }

};