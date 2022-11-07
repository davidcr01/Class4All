import React,{useState,useEffect} from 'react'
import {FlechasPaginacionAgenda} from '../flechasPaginacion'
import Button from '@mui/material/Button';

export const Agenda = () => {

    const [curretTarea, setCurretTarea] = useState(0)//indice de la estructura de tareas
    const [cargando,setCargando] = useState(true);
    const [tareas,setTareas] = useState([]);//estructura de tareas
    


    const rellenarAgenda = async() => {
        let url = 'http://localhost:3900/api/usuarios/user'/* +cookie */;
        try {
            let res = await fetch(url);
            let data = await res.json();
            setTareas(data.tareas);
            setCargando(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        rellenarAgenda();
    }, []);


    // if(cargando){
    //     return(
    //         <div>
    //             <h1>Cargando...</h1>
    //         </div>
    //     )
    // }
    // else{
    //     return (
    //         <div>
    //             <h1>AGENDA</h1>
    //             {/* Flechas -> currentTarea,setCurrentTarea,tareas*/}
    //             <FlechasPaginacionAgenda currentTarea={curretTarea} setCurrentTarea={setCurretTarea} tareas={tareas}/>
    //             {/* componente de la tarea*/}
    //             {/* boton-> currentTarea,tareas */}
    //             <Button variant="outlined" >Comenzar</Button>
    //         </div>
    //     )
    // }
    return (
        <div>
            <h1>AGENDA</h1>
            {/* Flechas -> currentTarea,setCurrentTarea,tareas*/}
            <FlechasPaginacionAgenda currentTarea={curretTarea} setCurrentTarea={setCurretTarea} tareas={tareas}/>
            {/* componente de la tarea*/}
            {/* boton-> currentTarea,tareas */}
            <Button variant="outlined" >Comenzar</Button>
        </div>
    )
  
}
