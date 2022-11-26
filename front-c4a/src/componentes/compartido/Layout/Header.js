import React from 'react';
import CerrarSesionBoton from './CerrarSesionBoton';
import '../styles.css';
import BotonParaAtras  from './BotonParaAtras'

const Header = (props) => {

    if (props.alumnos === "si") {
        return (
            <header>
                <BotonParaAtras url={props.url_anterior}></BotonParaAtras>
                <h1 className="titulo">{props.titulo}</h1>
                <CerrarSesionBoton/>
            </header>
        );
    }

    if (props.alumnos === "principal") {
        return (
            <header>
                <h1 className="titulo">{props.titulo}</h1>
                <CerrarSesionBoton/>
            </header>
        );
    }

    return (
        <header>
            <h1 className="titulo2">{props.titulo}</h1>
            <CerrarSesionBoton/>
        </header>
    );
}

export default Header;