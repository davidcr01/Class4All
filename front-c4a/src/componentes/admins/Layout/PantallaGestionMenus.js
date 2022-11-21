import React from 'react';
import '../styles.css';
import BuscarFiltros from '../../compartido/Layout/Tareas/BuscarFiltros';
import ListaMenus from './ListaMenus';

// Vista: admins

const PantallaGestionMenus = ()=> {
    return(
    <div className='PantallaGestionUsuarios'>
        <BuscarFiltros/>

        <ListaMenus/>
    </div>
    )
    }

export default PantallaGestionMenus;