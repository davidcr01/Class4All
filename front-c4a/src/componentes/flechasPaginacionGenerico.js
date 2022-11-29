import React from 'react'
import Button from '@mui/material/Button';
import "./compartido/styles.css";
import {ArrowBack, ArrowForward, Scale} from "@mui/icons-material";

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


    if (length > increment) {
        if (currentIndex === 0)
            return (
                <div className='flechaAgenda'>
                    <div className='flechaD'>
                        <Button className="boton-paginacion" variant="contained" onClick={e => paginaAdelante()}>
                            {/* <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flecha_tesela.svg/1200px-Flecha_tesela.svg.png' /> */}
                            <ArrowForward className='fuente-flecha'/>
                        </Button>
                    </div>
                </div>
            )

        else if (currentIndex + increment >= length)
            return (
                <div className='flechaAgenda'>
                    <div className='flechaI'>
                        <Button className="boton-paginacion" variant="contained" onClick={e => paginaAtras()} /* startIcon={<ArrowBackIcon />} */>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flecha_tesela.svg/1200px-Flecha_tesela.svg.png' />
                        </Button>

                    </div>
                </div>
            )

        else
            return (
                <div className='flechaAgenda'>
                    <div className='flechaI'>
                        <Button className="boton-paginacion" variant="contained" onClick={e => paginaAtras()} /* startIcon={<ArrowBackIcon />} */>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flecha_tesela.svg/1200px-Flecha_tesela.svg.png' />
                        </Button>
                    </div>

                    <div className='flechaD'>
                        <Button className="boton-paginacion" variant="contained" onClick={e => paginaAdelante()}>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flecha_tesela.svg/1200px-Flecha_tesela.svg.png' />
                        </Button>
                    </div>
                </div>
            )
    }
}
