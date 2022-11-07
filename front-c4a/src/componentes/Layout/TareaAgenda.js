import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export const TareaAgenda = ({tarea}) => {

  return (
    <div>
        
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia 
                component="img"
                height="140"
                //Cambiar el el modelo
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            />
            <CardContent>
                <h1>{tarea.nombre}</h1>
            </CardContent>
        </Card>

        {/*va con un calendario estático de Material UI y es la fecha limite */}
        <h2>tarea.fechaAsignada</h2>
    </div>
  )
}
