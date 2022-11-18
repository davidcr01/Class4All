import React, {useEffect, useState} from 'react';
import Cookies from 'universal-cookie';
import {useNavigate} from 'react-router-dom';
import {isCookieSet, logoutServer} from "../../../interfazCookies/cookies";

//Componente para div de cerrar sesion
// Vista: compartido

const CerrarSesionBoton = () => { 
    const [cargando, setCargando] = useState();
    const [logged, setLogged] = useState();
    
    
    useEffect(() => {
        setLogged(false);
        setCargando(true);
        isCookieSet().then((res) => {
            setCargando(false);


            setLogged(res);
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
        height: "5%",
        width: "20%", 
        right:"2%", 
        fontSize: "50%",  
        color: "black", 
        backgroundColor: "#E89482",
        borderRadius: "5px",
        fontSize: "1em",
        fontWeight: "bold"
    };

    if(!cargando && cookies.get("loginCookie") !== undefined && logged === true){
        return (        
            <button style={style} onClick={handleLogOut}>
                Cerrar Sesión
            </button>
        );
    }
    }

export default CerrarSesionBoton;