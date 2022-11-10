import React from 'react'
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

export const FlechasPaginacionGenerico = ({currentIndex,setCurrentIndex,length, increment}) => {
    //alert(currentIndex);

    const paginaAtras = () => {
        
        if(currentIndex>0){
            setCurrentIndex(currentIndex-increment);
           
        }
    }
    const paginaAdelante = () => {
        
        if(currentIndex<length-1){
            
            setCurrentIndex(currentIndex+increment);
        }
    }



  return (
    <div className='flechaAgenda'>
        {/* <Stack direction="row" spacing={2}> */}
            <div className='flechaI'>
            <Button  variant="contained" onClick={e => paginaAtras()} /* startIcon={<ArrowBackIcon />} */>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flecha_tesela.svg/1200px-Flecha_tesela.svg.png'/>
            </Button>
            
            </div>

            
            <div className='flechaD'>
            <Button variant="contained" onClick={e => paginaAdelante()}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flecha_tesela.svg/1200px-Flecha_tesela.svg.png'/>
            </Button>
            </div>
            
            {/* <button onClick={e => paginaAtras()}> Pagina anterior</button>
            <button onClick={e => paginaAtras()}>Pagina siguiente</button> */}
        {/* </Stack> */}
    </div>
  )
}
