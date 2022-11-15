import React from 'react';
import Usuarios from './Usuarios.js';
import '../../styles.css';
import { useNavigate } from 'react-router-dom';

const ListaUsuarios = (props) => {
    let nav = useNavigate();

        return (
            <div className='ListaTareas'>
                <button className="botoncrear" onClick={() => nav("/crear-usuario")}>Crear usuario</button>
                <Usuarios/>
            </div>

        )


}

export default ListaUsuarios;