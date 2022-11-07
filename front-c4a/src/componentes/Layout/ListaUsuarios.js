import React, {useState} from 'react';
import Usuarios from './Usuarios.js';
import '../../styles.css';

const ListaUsuarios = (props) => {

        return (
            <div className='ListaTareas'>
                <div className="botoncrear">Crear usuario</div>
                <Usuarios/>
            </div>

        )


}

export default ListaUsuarios;