import React from 'react';
import Usuarios from '../../admins/Layout/Usuarios.js';
import '../../../styles.css';
import { useNavigate } from 'react-router-dom';

// Devuelve el botón de crear usuarios y lista los ya existentes
// Vista: administrador

const ListaUsuarios = (props) => {
    let nav = useNavigate();

        return (
            <div className='ListaUsuarios'>
                <button className="botoncrear" onClick={() => nav("/crear-usuario")}>Crear usuario</button>
                <Usuarios/>
            </div>

        )


}

export default ListaUsuarios;