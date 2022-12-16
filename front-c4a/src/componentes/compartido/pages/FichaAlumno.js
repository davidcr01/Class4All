import React, { useEffect } from "react";
import {useState} from "react";
import BuscarFiltros from "../Layout/Tareas/BuscarFiltros";
import '../../../styles.css'
import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
import { MuiBreadcrumbsFichaAlumno, MuiBreadcrumbsGUS } from '../../muibreadcrumbs';
import { ContenidoFichaAlumno } from "../Layout/ContenidoFichaAlumno";
import { isCookieSet } from "../../../interfaces/cookies";
import Cookies from "universal-cookie";
import CargandoProgress from "../Layout/CargandoProgress";
import { useLocation } from "react-router-dom";

// Página para cargar la ficha técnica del alumno. Usa el comoponente ContenidoFichaAlumno

export const FichaAlumno = () => {
    const [isSet, setIsSet] = useState(false);
    const [cargando, setCargando] = useState(true);
    const cookies = new Cookies();
    const location = useLocation();

    useEffect(() => {
        isCookieSet().then((data) => {
            setIsSet(data);
            setCargando(false);
        })
    }, []);


    if(cargando)
        return (
            <CargandoProgress/>
        )

    else if(isSet && cookies.get("loginCookie") !== undefined && location.state !== null)
    return (
        <>
            <Header titulo="Ficha Alumno"/>
            <MuiBreadcrumbsFichaAlumno />
                {/* <div className='PantallaGestionUsuarios'> */}
                <div>
                    {/* <BuscarFiltros childToParent={() => {}}/> */}
                    <ContenidoFichaAlumno alumno={location.state.alumno}/>
                </div>
            <Footer />        
        </>
    )
    else
        return(
            <>
                <h1>NO TIENES PERMISOS</h1>
            </>
        )
}