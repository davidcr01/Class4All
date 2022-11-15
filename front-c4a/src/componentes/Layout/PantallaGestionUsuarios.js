import React from 'react';
import '../../styles.css';
import BuscarFiltros from './BuscarFiltros';
import ListaUsuarios from './ListaUsuarios'; 

const PantallaGestionUsuarios = ()=> {
    return(
    <div className='PantallaGestionTareas'>
        <BuscarFiltros/>

        <ListaUsuarios/>
    </div>
    )
    }

export default PantallaGestionUsuarios;