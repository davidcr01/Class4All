import React from 'react';
import '../../styles.css';
import BuscarFiltros from './BuscarFiltros';
import ListaTareas from './ListaTareas'; 
const PantallaGestionTareas = (props)=> {
    return(
    <div className='PantallaGestionTareas'>
        <BuscarFiltros/>
        
        <ListaTareas tipo={props.tipo} cambio={props.cambio} />
    </div>
    )
    }

export default PantallaGestionTareas;