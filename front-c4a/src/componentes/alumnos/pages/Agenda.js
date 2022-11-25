import React, { useState, useEffect } from 'react'

import Button from '@mui/material/Button';
import '../styles.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Cookies from 'universal-cookie';

import { isCookieSet } from '../../../interfazCookies/cookies';
import Header from '../../compartido/Layout/Header';
import CargandoProgress from '../../compartido/Layout/CargandoProgress';
import { useNavigate } from 'react-router-dom';
import { FlechasPaginacionGenerico } from '../../flechasPaginacionGenerico';
import BotonParaAtras from '../../compartido/Layout/BotonParaAtras';

export const Agenda = () => {

    const [currentTarea, setCurrentTarea] = useState(0)//indice de la estructura de tareas

    const [cargando, setCargando] = useState(true);
    const [tareas, setTareas] = useState(undefined);//estructura de tareas
    //const [fotos,setFotos] = useState([]);//estructura de fotos
    const [cookieSet, setCookieSet] = useState();
    const nav = useNavigate();

    const comenzarHandler = (t) =>{
        if(t.tipo === "entregaMateriales"){
            nav(`/entregaMaterial/${t._id}`)
        }
        else if(t.tipo === "comanda"){
            nav(`/comanda/${t._id}`)
        }
        else{
            nav(`/mitarea/${t._id}`)
        }
    }

    const rellenarAgenda = async () => {
        const cookies = new Cookies();
        let url = 'http://localhost:3900/api/tareas/tareas-usuario/' + cookies.get('loginCookie').id/* +cookie */;
        try {
            let res = await fetch(url);
            let data = await res.json();

            if (data.status === "success")
                setTareas(data.tareas);
            //setCargando(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setCargando(true);
        setCookieSet(false);
        //Llamada para comprobar (quizas solo admin)

        rellenarAgenda().then(() => {
            isCookieSet().then((res) => {
                setCookieSet(res);
                setCargando(false);
            });
        })
    }, []);


    if (cargando) {
        return (
            <CargandoProgress />
        )
    }

    else {
        const cookies = new Cookies();

        const isRoleRight = () => {
            let res = false;
            const infoCookie = cookies.get("loginCookie");

            if (infoCookie.rol === "Alumno")
                res = true;

            return res;
        }

        if (cookies.get("loginCookie") !== undefined && cookieSet && isRoleRight()) {
            const tareasLength = (tareas === undefined) ? 0 : tareas.length;
            const tareasIncrement = 1;

            if (tareas !== undefined && tareasLength > 0)
                return (
                    <>
                      <BotonParaAtras url="/Tareas"/>
                        <Header titulo="Agenda" /><div className='PaginaAgenda'>
                            {/* <TareaAgenda tarea={tareas[currentTarea]} key={currentTarea}/> */}

                            <FlechasPaginacionGenerico currentIndex={currentTarea} setCurrentIndex={setCurrentTarea} length={tareas.length} increment={tareasIncrement} />
                            {/*<FlechasPaginacionAgenda currentTarea={currentTarea} setCurrentTarea={setCurrentTarea} totalTareas={tareas.length} />*/}
                            <div className='tareaAgenda'>
                                <div className='tarjetaAgenda' >
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            component="img"
                                            height="230"
                                            className="estilotarjeta"
                                            //Cambiar el el modelo
                                            image={'http://localhost:3900/api/tareas/get-foto/' + tareas[currentTarea]._id}
                                            alt={tareas[currentTarea].nombre} />
                                        <CardContent>
                                            <h1>{tareas[currentTarea].nombre}</h1>
                                        </CardContent>
                                    </Card>
                                </div>


                                {/*va con un calendario estático de Material UI y es la fecha limite */}
                                <h2>Fecha Límite: {tareas[currentTarea].fechaLimite}</h2>


                            </div>


                            {/* boton-> currentTarea,tareas */}
                            <div className='botonComenzar' onClick={e => comenzarHandler(tareas[currentTarea])/* () => nav("/mitarea/" + tareas[currentTarea]._id) */}>
                                <Button variant="outlined" className='estilobotoncomenzar'>Comenzar</Button>
                            </div>

                        </div>
                    </>
                )

            else
                return (
                    <>
                        <Header titulo="Agenda" /><div className='PaginaAgenda'></div>
                        <h1>NO TIENES TAREAS ASIGNADAS</h1>
                    </>
                )
        }

        else
            return (
                <h1>No tiene permiso para ver esta página</h1>
            )
    }
}
