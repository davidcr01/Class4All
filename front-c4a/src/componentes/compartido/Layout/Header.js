import React from 'react';
import CerrarSesionBoton from './CerrarSesionBoton';
import '../styles.css';
import BotonParaAtras  from './BotonParaAtras'

const Header = (props) => {

    if (props.alumnos === "si") {
        return (
            <header>
                <BotonParaAtras url={props.url_anterior}></BotonParaAtras>
                <h1 className="titulo color-alumno">{props.titulo}</h1>
                <CerrarSesionBoton/>
            </header>
        );
    }

    //Pagina principal de inicio de sesion donde se selecciona clase
    if (props.alumnos === "principal") {
        return (
            <header>
                <h1 className="titulo-principal color-alumno">{props.titulo}</h1>
                <CerrarSesionBoton/>
            </header>
        );
    }

    //Inicio de sesion, seleccion de alumno
    if (props.alumnos === "principal-alumnos") {
        return (
            <header>
                <BotonParaAtras url={props.url_anterior}></BotonParaAtras>
                <h1 className="titulo_inicio_alumnos color-alumno">{props.titulo}</h1>
                <CerrarSesionBoton/>
            </header>
        );
    }

    //Inicio de sesion, seleccion de alumno
    if (props.alumnos === "principal-admins") {
        return (
            <header>
                <BotonParaAtras url={props.url_anterior}></BotonParaAtras>
                <h1 className="titulo_inicio_admins color-alumno">{props.titulo}</h1>
                <CerrarSesionBoton/>
            </header>
        );
    }

    return (
        <header>
            <h1 className="titulo_admins">{props.titulo}</h1>
            <CerrarSesionBoton/>
        </header>
    );
}

export default Header;