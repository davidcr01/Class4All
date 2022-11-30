import '../../../styles.css'
import React, { useState, useEffect } from 'react'
import Header from '../../compartido/Layout/Header.js';
import Footer from '../../compartido/Layout/Footer.js';
import { MuiBreadcrumbsGUS } from '../../muibreadcrumbs';
import Materiales from '../../compartido/Layout/Materiales/Materiales.js';
import Cookies from 'universal-cookie';
import { isCookieSet } from '../../../interfaces/cookies';
import CargandoProgress from '../../compartido/Layout/CargandoProgress';

// Vista: profesores

export const GestionUsuarios = () => {
    const [tipo, setTipo] = useState();
    const [cargando, setCargando] = useState();
    const [cookieSet, setCookieSet] = useState();

    useEffect(() => {
        setCargando(true);
        setCookieSet(false);
        //Llamada para comprobar (quizas solo admin)
        isCookieSet().then((res) => {
            setCargando(false);
            setCookieSet(res);
        });
    }, []);

    if (cargando === true) {
        return (
        <CargandoProgress/>
        )
    }
    else {
        const cookies = new Cookies();

        if (cookies.get("loginCookie") !== undefined && cookieSet)
            return (
                <>
                <Header titulo="Pedir Materiales" />
                <MuiBreadcrumbsGUS />
                <Materiales />
                <Footer />
                </>
            )
        else
            return (
                <h1>No tiene permiso para ver esta página</h1>
            )
    }
};