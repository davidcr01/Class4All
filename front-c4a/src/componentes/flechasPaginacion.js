import React from 'react'
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';

export const FlechasPaginacionAgenda = ({currentTarea,setCurrentTarea,tareas}) => {

    const paginaAtras = () => {
        if(currentTarea>0){
            setCurrentTarea(currentTarea-1);
        }
    }
    const paginaAdelante = () => {
        if(currentTarea<tareas.length-1){
            setCurrentTarea(currentTarea+1);
        }
    }


  return (
    <div>
        <Stack direction="row" spacing={2}>
            <Button variant="contained" endIcon={<ArrowBackIcon />} onClick={e => paginaAtras()}>
                Pagina anterior
            </Button>

            <Button variant="contained" endIcon={<ArrowForwardIcon />} onClick={e => paginaAdelante()}>
                Pagina siguiente
            </Button>
        </Stack>
    </div>
  )
}
