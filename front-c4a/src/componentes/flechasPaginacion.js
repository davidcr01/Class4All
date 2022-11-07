import React from 'react'
import Stack from '@mui/material/Stack';
//import ArrowBackIcon from '@mui/icons-material/ArrowBack';
//import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
    <div className='flechaAgenda'>
        {/* <Stack direction="row" spacing={2}> */}
            <div className='flechaI'>
            <Button  variant="contained" /* endIcon={<ArrowBackIcon />} */ onClick={e => paginaAtras()}>
                Pagina anterior
            </Button>
            </div>
            
            <div className='flechaD'>
            <Button variant="contained"/* endIcon={<ArrowForwardIcon />} */ onClick={e => paginaAdelante()}>
                Pagina siguiente
            </Button>
            </div>
            
            {/* <button onClick={e => paginaAtras()}> Pagina anterior</button>
            <button onClick={e => paginaAtras()}>Pagina siguiente</button> */}
        {/* </Stack> */}
    </div>
  )
}
