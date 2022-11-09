import React, { useState, useEffect } from 'react'
import { FlechasPaginacionAgenda } from '../flechasPaginacion'
import Button from '@mui/material/Button';
import '../../styles.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Cookies from 'universal-cookie';
import { isCookieSet } from '../../interfazCookies/cookies';
import CargandoProgress from '../Layout/CargandoProgress';
import { useParams } from "react-router-dom"

export const TareaEspecifica = () => {

    const [tarea, setTarea] = useState(0)//indice de la estructura de tareas

    const [cargando,setCargando] = useState(true);
    //const [fotos,setFotos] = useState([]);//estructura de fotos
    const [cookieSet, setCookieSet] = useState();
    
    const { id } = useParams();

    const getTarea = async() => {
        console.log("a" + id);
        let url = 'http://localhost:3900/api/tareas/tarea/'+id/* +cookie */;
        try {
            let res = await fetch(url);
            let data = await res.json();
            console.log(data);
            setTarea(data);
            //setCargando(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setCargando(true);
        setCookieSet(false);
        //Llamada para comprobar (quizas solo admin)

        getTarea().then(() => {
            isCookieSet().then((res) => {
                setCargando(false);
                setCookieSet(res);
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

        if (cookies.get("loginCookie") !== undefined && cookieSet)    
        return (
            <div className='PaginaAgenda'>
                <h1>{tarea.tarea.nombre}</h1>
               <div className='tareaAgenda'>
                
                <div className='tarjetaAgenda'>
                <Card className="tarjeta" sx={{ maxWidth: 345 }}>
                    <CardMedia 
                        component="img"
                        height="230"
                        //Cambiar el el modelo
                        image={'http://localhost:3900/api/tareas/foto/'+tarea.tarea._id}
                        alt={tarea.nombre}
                    />
                    <CardContent>
                        <h1>{tarea.nombre}</h1>
                    </CardContent>
                </Card>
                <div className='tarjeta'><Card sx={{ maxWidth: 345 }}>
                    <CardMedia 
                        component="img"
                        height="230"
                        //Cambiar el el modelo
                        image={require("../../img/done.png")}
                        alt={tarea.nombre}
                    />
                    <CardContent>
                        <h1>{tarea.nombre}</h1>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia 
                        component="img"
                        height="230"
                        //Cambiar el el modelo
                        image={require("../../img/instrucciones.png")}
                        alt={tarea.nombre}
                    />
                    <CardContent>
                        <h1>{tarea.nombre}</h1>
                    </CardContent>
                </Card></div>
                </div>
                
        
                {/*va con un calendario estático de Material UI y es la fecha limite */}
                <h2>Fecha Límite: {tarea.tarea.fechaLimite}</h2>
                
                
            </div>


                    {/* boton-> currentTarea,tareas */}
                    <div className='botonComenzar'>
                        <Button variant="outlined" style={{ width: '200px', height: '80px' }} >Comenzar</Button>
                    </div>

                </div>
            )

        else
            return (
                <h1>No tiene permiso para ver esta página</h1>
            )
    }

}
