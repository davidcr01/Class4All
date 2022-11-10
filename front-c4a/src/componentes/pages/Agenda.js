import React, { useState, useEffect } from 'react'
import { FlechasPaginacionAgenda } from '../flechasPaginacion'
import Button from '@mui/material/Button';
import '../../styles.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Cookies from 'universal-cookie';
import { isCookieSet } from '../../interfazCookies/cookies';
import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
import CargandoProgress from '../Layout/CargandoProgress';
import {useNavigate} from 'react-router-dom';


export const Agenda = () => {

    const [curretTarea, setCurretTarea] = useState(0)//indice de la estructura de tareas

    const [cargando,setCargando] = useState(true);
    const [tareas,setTareas] = useState([]);//estructura de tareas
    //const [fotos,setFotos] = useState([]);//estructura de fotos
    const [cookieSet, setCookieSet] = useState();
    

    const nav = useNavigate();

    const rellenarAgenda = async() => {
        const cookies = new Cookies();
        let url = 'http://localhost:3900/api/tareas/usuario/'+ cookies.get('loginCookie').id/* +cookie */;
        try {
            let res = await fetch(url);
            let data = await res.json();
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
            <CargandoProgress/>
        )
    }

    else{
        const cookies = new Cookies();

        const isRoleRight = () => {
            let res = false;
            const infoCookie = cookies.get("loginCookie");
      
            if(infoCookie.rol === "Alumno")
              res =true;
      
            return res;
          }

        if (cookies.get("loginCookie") !== undefined && cookieSet && isRoleRight())    
        return (
            <><Header titulo="Agenda" /><div className='PaginaAgenda'>
                {/* <TareaAgenda tarea={tareas[curretTarea]} key={curretTarea}/> */}

                <FlechasPaginacionAgenda currentTarea={curretTarea} setCurrentTarea={setCurretTarea} totalTareas={tareas.length} />
                <div className='tareaAgenda'>
                    <div className='tarjetaAgenda' onClick={() => nav("/mitarea/"+tareas[curretTarea]._id)}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="230"
                                style={{display: 'unset', width: 'auto'}}
                                //Cambiar el el modelo
                                image={'http://localhost:3900/api/tareas/foto/' + tareas[curretTarea]._id}
                                alt={tareas[curretTarea].nombre} />
                            <CardContent>
                                <h1>{tareas[curretTarea].nombre}</h1>
                            </CardContent>
                        </Card>
                    </div>


                    {/*va con un calendario estático de Material UI y es la fecha limite */}
                    <h2>Fecha Límite: {tareas[curretTarea].fechaLimite}</h2>


                </div>


                {/* boton-> currentTarea,tareas */}
                <div className='botonComenzar'>
                    <Button variant="outlined" style={{ width: '200px', height: '80px' }}>Comenzar</Button>
                </div>

            </div>
            </>
            )

        else
            return (
                <h1>No tiene permiso para ver esta página</h1>
            )
    }

}
