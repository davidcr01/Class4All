import React from 'react';
import Cookies from 'universal-cookie';
import {useNavigate} from 'react-router-dom';
import {logoutServer} from "../../interfazCookies/cookies";

//Componente para div de cerrar sesion
const CerrarSesionBoton = () => {    
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
        width: "20%", 
        right:"2%", 
        fontSize: "50%",  
        color: "black", 
        backgroundColor: "#F1F1F1"
    };

    return (        
        <button style={style} onClick={handleLogOut}>
            Cerrar Sesión
        </button>
    );
}

export default CerrarSesionBoton;