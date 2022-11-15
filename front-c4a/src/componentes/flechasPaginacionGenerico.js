import React from 'react'
import Button from '@mui/material/Button';

export const FlechasPaginacionGenerico = ({currentIndex,setCurrentIndex,length, increment}) => {
    //alert(currentIndex);

    const paginaAtras = () => {
        
        if(currentIndex>0){
            setCurrentIndex(currentIndex-increment);
           
        }
    }
    const paginaAdelante = () => {
        
        if(currentIndex<length-increment){
            
            setCurrentIndex(currentIndex+increment);
        }
    }



  return (
    <div className='flechaAgenda'>
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
    </div>
  )
}
