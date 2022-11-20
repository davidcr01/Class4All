import React from 'react';
import '../styles.css';
import BuscarFiltros from '../../compartido/Layout/Tareas/BuscarFiltros';
import ListaUsuarios from '../../admins/Layout/ListaUsuarios';

// Vista: admins

const PantallaGestionUsuarios = ()=> {
    return(
    <div className='PantallaGestionUsuarios'>
        <BuscarFiltros/>

        <ListaUsuarios/>
    </div>
    )
    }

export default PantallaGestionUsuarios;