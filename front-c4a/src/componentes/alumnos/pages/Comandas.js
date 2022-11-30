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

export const Comandas = ({ aula }) => {

  const { id } = useParams();
  const url_ant = `/comanda/${id}`;
  const cookies = new Cookies();
  const [cargando, setCargando] = useState(true);
  const [isSet, setIsSet] = useState(false);
  const [menus, setMenus] = useState([]);
  const [index, setIndex] = useState(0);
  const [conteoCantidades, setConteoCantidades] = useState([]);
  const nav = useNavigate();


  useEffect(() => {
    isCookieSet().then((res) => {
      setIsSet(res);

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
        if (data.status === "success") {
          //alert(JSON.stringify(data.menus[0]))
          setMenus(data.menus);
          setConteoCantidades(new Array(data.menus.length).fill(0));
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
    const increment = 2;
    const menusVisibles = menus.slice(index, index + increment);
    const menusLength = (menus === undefined) ? 0 : menus.length + 1;


    if (menusLength > 0) {
      const location = useLocation();

      if (index === menusLength - 1) {
        let menuEnvio = [];
        for(let i=0; i<menus.length; i++){
          menuEnvio.push({menu: menus[i]._id, cantidad: conteoCantidades[i]});
        }

        const sendListado = () => {
          sendMenu(id, menuEnvio).then((data) =>{
            if(data){
              setAulaCompletada(id, location.state.aula).then((res) => {
                if(res){
                  nav(url_ant);
                }
                else{
                  alert("Comanda enviada, pero ha habido un error en la clase");
                }
              })
            }
            else{
              alert("No ha sido posible enviar la comanda");
            }
          })        
        }

        return (
          <>
            <Header titulo={"Comandas clase " + location.state.aula} alumnos="si" url_anterior={url_ant} />
            <FlechasPaginacionGenerico currentIndex={index} setCurrentIndex={setIndex} length={menusLength} increment={increment} />
            <section className='contenedorBoton'>
              <Button variant="outlined" sx={{ fontSize: 35, borderRadius: 5 }} className='botonEnviarMenus' onClick={sendListado}>Enviar</Button>
            </section>
          </>
        );
      }
      else {
        return (
          <>
            <Header titulo={"Comandas clase " + location.state.aula} alumnos="si" url_anterior={url_ant} />
            <FlechasPaginacionGenerico currentIndex={index} setCurrentIndex={setIndex} length={menusLength} increment={increment} />
            <div className="cuerpo">
              <div className="recuadrosmenus">
                <Menus menus={menusVisibles} cantidades={conteoCantidades} setCantidades={setConteoCantidades} currentIndex={index} />
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