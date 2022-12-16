import React from 'react';
import '../../styles.css';
import BuscarFiltros from './BuscarFiltros';
import ListaTareas from './ListaTareas';

// Vista: compartido (profs y admins)
// Componente para mostrar la lista de las tareas

const PantallaGestionTareas = (props)=> {
    return(
    //CAMBIADO PARA QUE NO HAYA FILTROS EN LA GESTIÓN DE TAREAS
    <div className='PantallaGestionTareas'>
        <ListaTareas tipo={props.tipo} cambio={props.cambio} />
    </div>
    )
    }

export default PantallaGestionTareas;