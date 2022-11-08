import React,{useState,useEffect} from 'react'
import {FlechasPaginacionAgenda} from '../flechasPaginacion'
import Button from '@mui/material/Button';
import { TareaAgenda } from '../Layout/TareaAgenda';
import '../../styles.css'

export const Agenda = () => {

    const [curretTarea, setCurretTarea] = useState(0)//indice de la estructura de tareas
    const [cargando,setCargando] = useState(true);
    const [tareas,setTareas] = useState([]);//estructura de tareas
    


    const rellenarAgenda = async() => {
        let url = 'http://localhost:3900/api/usuarios/user/'+'636948cac1323a887bb794f3'/* +cookie */;
        try {
            let res = await fetch(url);
            let data = await res.json();
            setTareas(data.usuario.tareasAsignadas);
            setCargando(false);
          
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        rellenarAgenda();
    }, []);


    if(cargando){
        return(
            <div>
                <h1>Cargando...</h1>
            </div>
        )
    }
    else{
        return (
            <div className='PaginaAgenda'>
                <h1>AGENDA</h1>
                {/* Flechas -> currentTarea,setCurrentTarea,tareas*/}
                <FlechasPaginacionAgenda currentTarea={curretTarea} setCurrentTarea={setCurretTarea} tareas={tareas}/>
                <TareaAgenda tarea={tareas[curretTarea]} key={curretTarea}/>
                {/* componente de la tarea*/}
                {/* boton-> currentTarea,tareas */}
                <div className='botonComenzar'>
                    <Button variant="outlined" style={{width:'200px',height:'80px'}} >Comenzar</Button>
                </div>
                
            </div>
        )
    }
    
    /* return (
        <div>
            <h1>AGENDA</h1>
     //       {/* Flechas -> currentTarea,setCurrentTarea,tareas*/
    //        <FlechasPaginacionAgenda currentTarea={curretTarea} setCurrentTarea={setCurretTarea} tareas={tareas}/>
    //        {/* componente de la tarea*/}
    //        {/* boton-> currentTarea,tareas */}
    //        <Button variant="outlined" >Comenzar</Button>
    //    </div>
    //) */
  
}
