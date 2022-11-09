import React, {useState} from 'react';
import Usuarios from './Usuarios.js';
import '../../styles.css';
import { useNavigate } from 'react-router-dom';

const ListaUsuarios = (props) => {
    let nav = useNavigate();

        return (
            <div className='ListaTareas'>
                <div className="botoncrear" onClick={() => nav("/crear-usuario")}>Crear usuario</div>
                <Usuarios/>
            </div>

        )


}

export default ListaUsuarios;