import React from 'react';
import CerrarSesionBoton from './CerrarSesionBoton';
import '../../styles.css';
const Header = (props) => {


    return (
        <div>
            <><h1 className="titulo">{props.titulo}</h1>
            <CerrarSesionBoton/></>
        </div>
    );
}

export default Header;