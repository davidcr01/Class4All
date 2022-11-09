import React, {useEffect, useState} from 'react';
import Cookies from 'universal-cookie';
import {useNavigate} from 'react-router-dom';
import {isCookieSet, logoutServer} from "../../interfazCookies/cookies";
import { fontSize } from '@mui/system';

//Componente para div de cerrar sesion
const CerrarSesionBoton = () => { 
    const [cargando, setCargando] = useState();
    const [logged, setLogged] = useState();
    
    
    useEffect(() => {
        setLogged(false);
        setCargando(true);
        isCookieSet().then((res) => {
            setCargando(false);


            setLogged(res);

            console.log("isSet: "+logged)
        });
    }, []);
    
    
    const nav=useNavigate();
    const cookies = new Cookies();

    const handleLogOut = (e) => {
        if(cookies.get("loginCookie") !== undefined){
            logoutServer().then(() =>{
                cookies.remove("loginCookie");
                nav("/");
            });
        }
    }

    const style = {
        position: "absolute", 
        top: "3.3%", 
        height: "4%",
        width: "12%", 
        right:"2%", 
        fontSize: "50%",  
        color: "black", 
        backgroundColor: "#F1F1F1",
        fontSize: "90%"
    };

    const imagen = {
        width: "30%"
    };

    //imagen cerrar sesion
    //let img = require("../../img/cerrar-sesion3.png")

    if(!cargando && cookies.get("loginCookie") !== undefined && logged === true){
        return (        
            <button style={style} onClick={handleLogOut}>
                Cerrar Sesión
            </button>
        );
    }
    }

export default CerrarSesionBoton;