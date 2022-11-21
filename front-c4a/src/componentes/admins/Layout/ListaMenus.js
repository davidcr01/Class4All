import React from 'react';
import Menus from './Menus.js';
import '../../../styles.css';
import { useNavigate } from 'react-router-dom';

// Devuelve el botón de crear usuarios y lista los ya existentes
// Vista: administrador

const ListaMenus = (props) => {
    let nav = useNavigate();

        return (
            <div className='ListaUsuarios'>
                <button className="botoncrear" onClick={() => nav("/crear-menu")}>Crear menú</button>
                <Menus/>
            </div>

        )


}

export default ListaMenus;