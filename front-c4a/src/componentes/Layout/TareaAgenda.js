import React, { useEffect,useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export const TareaAgenda = ({tarea}) => {

    const [cargando,setCargando] = useState(true);
    const [tareaAgenda,setTareaAgenda] = useState({});

    const rellenarTarea = async() => {
        let url = 'http://localhost:3900/api/tareas/tarea/'+tarea;
        try {
            let res = await fetch(url);
            let data = await res.json();
            setTareaAgenda(data.tarea);
            setCargando(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        rellenarTarea();
    }, [])

    if(cargando){
        /* return(
            <div>
                <h1>Cargando...</h1>
            </div>
        ) */
    }
    else{
        return (
            <div className='tareaAgenda'>
                
                <div className='tarjetaAgenda'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia 
                        component="img"
                        height="230"
                        //Cambiar el el modelo
                        image="https://thumbs.dreamstime.com/b/icono-de-contorno-superficie-limpia-s%C3%ADmbolo-limpieza-f%C3%A1cil-para-el-dise%C3%B1o-gr%C3%A1fico-sitio-web-social-medio-m%C3%B3vil-aplicaci%C3%B3n-ui-194540151.jpg"
                        alt={tareaAgenda.nombre}
                    />
                    <CardContent>
                        <h1>{tareaAgenda.nombre}</h1>
                    </CardContent>
                </Card>
                </div>
                
        
                {/*va con un calendario estático de Material UI y es la fecha limite */}
                
                
                
            </div>
          )
    }
  
}
