import React from 'react';
import CerrarSesionBoton from './CerrarSesionBoton';

const Header = (props) => {
    return (
        React.createElement(
            "h1",
            { style: { height: "60px", fontSize: "35pt",  color: "#0099D7", backgroundColor: "#E2E2E2", textAlign: "center"} },
            <>{props.titulo}
            <CerrarSesionBoton/></>)
    );
}

export default Header;