import React from 'react';
import '../styles.css';
import BuscarFiltros from '../../compartido/Layout/Tareas/BuscarFiltros';
import ListaUsuarios from '../../admins/Layout/ListaUsuarios';
import {useState} from 'react'

// Vista: admins

const PantallaGestionUsuarios = () => {
    const [filtro, setFiltro] = useState(0);

    const parentToChild = () => {

    }

    const childToParent = (i) => {
        setFiltro(i);
    }
    return (

        <div className='PantallaGestionUsuarios'>
            <BuscarFiltros childToParent={childToParent}/>

            <ListaUsuarios />
        </div>
    )
}

export default PantallaGestionUsuarios;