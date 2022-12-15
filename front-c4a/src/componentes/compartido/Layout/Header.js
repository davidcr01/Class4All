import React from 'react';
import CerrarSesionBoton from './CerrarSesionBoton';
import '../styles.css';
import BotonParaAtras  from './BotonParaAtras'

// Se sostienen varios tipos de headers. El header contiene el botón hacia atrás
// - Header para los alumnos
// - Header para la página principal
// - Header para la página principal para los alumnos
// - Header para la página principal para los administradores


const Header = (props) => {

    if (props.alumnos === "si") {
        if(!props.botonAtras && props.botonAtras !== undefined)
        return (
            <header>
                {/* <BotonParaAtras url={props.url_anterior}></BotonParaAtras> */}
                <h1 className="titulo color-alumno">{props.titulo}</h1>
                <CerrarSesionBoton/>
            </header>
        );

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