import React,{useState,useEffect} from 'react'
import {FlechasPaginacionAgenda} from '../flechasPaginacion'
import Button from '@mui/material/Button';
import '../../styles.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export const Agenda = () => {

    const [curretTarea, setCurretTarea] = useState(0)//indice de la estructura de tareas
    const [cargando,setCargando] = useState(true);
    const [tareas,setTareas] = useState([]);//estructura de tareas
    


    const rellenarAgenda = async() => {
        let url = 'http://localhost:3900/api/tareas/usuario/'+'636948cac1323a887bb794f3'/* +cookie */;
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
                
                {/* <TareaAgenda tarea={tareas[curretTarea]} key={curretTarea}/> */}
                
                <FlechasPaginacionAgenda currentTarea={curretTarea} setCurrentTarea={setCurretTarea} tareas={tareas}/>
               <div className='tareaAgenda'>
                
                <div className='tarjetaAgenda'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia 
                        component="img"
                        height="230"
                        //Cambiar el el modelo
                        image="https://thumbs.dreamstime.com/b/icono-de-contorno-superficie-limpia-s%C3%ADmbolo-limpieza-f%C3%A1cil-para-el-dise%C3%B1o-gr%C3%A1fico-sitio-web-social-medio-m%C3%B3vil-aplicaci%C3%B3n-ui-194540151.jpg"
                        alt={tareas[curretTarea].nombre}
                    />
                    <CardContent>
                        <h1>{tareas[curretTarea].nombre}</h1>
                    </CardContent>
                </Card>
                </div>
                
        
                {/*va con un calendario estático de Material UI y es la fecha limite */}
                
                
                
            </div>


                {/* boton-> currentTarea,tareas */}
                <div className='botonComenzar'>
                    <Button variant="outlined" style={{width:'200px',height:'80px'}} >Comenzar</Button>
                </div>
                
            </div>
        )
    }
  
}
