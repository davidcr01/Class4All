import React from 'react';
import CerrarSesionBoton from './CerrarSesionBoton';

const Header = (props) => {
    const style = {
        height: "60px", 
        fontSize: "35pt", 
        color: "#0099D7", 
        backgroundColor: "#E2E2E2", 
        textAlign: "center"
    };

    return (
        <div>
            <h1 style={style}><>{props.titulo}
            <CerrarSesionBoton/></></h1>
        </div>
    );
}

export default Header;