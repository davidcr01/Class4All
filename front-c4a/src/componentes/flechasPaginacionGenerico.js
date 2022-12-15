import React from 'react'
import Button from '@mui/material/Button';
import "./compartido/styles.css";
import {ArrowBack, ArrowForward} from "@mui/icons-material";

export const FlechasPaginacionGenerico = ({ currentIndex, setCurrentIndex, length, increment }) => {
    //Cutre, hay que arreglarlo
    const paginaAtras = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - increment);

        }
    }
    const paginaAdelante = () => {

        if (currentIndex < length - increment) {

            setCurrentIndex(currentIndex + increment);
        }
    }

    if(length>increment){
        return (
            <div className='flechaAgenda'>
                { (currentIndex + increment >= length || (currentIndex + increment < length && currentIndex!==0)) &&
                    <div className='flechaI'>
                        <Button className="boton-paginacion" variant="contained" onClick={paginaAtras}>
                        <ArrowBack className='fuente-flecha'/>
                        </Button>
                    </div>}

                    { (currentIndex === 0 || (currentIndex + increment < length && currentIndex!==0)) &&
                    <div className='flechaD'>
                        <Button className="boton-paginacion" variant="contained" onClick={paginaAdelante}>
                        <ArrowForward className='fuente-flecha'/>
                        </Button>
                    </div>                                }
            </div>
        )
    }
}
