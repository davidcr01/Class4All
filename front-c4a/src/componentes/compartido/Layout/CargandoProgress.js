import { CircularProgress } from '@mui/material';
import React from 'react';
import '../styles.css';

// Animación de carga
// Vista: compartido

const CargandoProgress = () => {
    return (
        <div className='posicion-circular'>
            <CircularProgress/>
        </div>
    )
};

export default CargandoProgress;