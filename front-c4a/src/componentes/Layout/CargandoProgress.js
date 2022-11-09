import { CircularProgress } from '@mui/material';
import React from 'react';
import '../../styles.css';

const CargandoProgress = () => {
    /*
    const cargandoStyle = {
        display: "flex",
        justifyContent: "center"
    };
    */
    
    return (
        <div className='posicion-circular'>
            <CircularProgress/>
        </div>        
    )
};

export default CargandoProgress;