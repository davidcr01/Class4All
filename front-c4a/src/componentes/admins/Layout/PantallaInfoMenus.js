import React from 'react';
import '../styles.css';
import BuscarFiltros from '../../compartido/Layout/Tareas/BuscarFiltros';
import ListaMenus from './ListaMenus';

// Vista: admins

const PantallaInfoMenus = ()=> {
    return(
    <div className='PantallaGestionUsuarios'>
        <BuscarFiltros/>
    </div>
    )
    }

export default PantallaInfoMenus;