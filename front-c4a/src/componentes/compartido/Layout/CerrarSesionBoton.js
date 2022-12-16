import React, {useEffect, useState} from 'react';
import Cookies from 'universal-cookie';
import {useNavigate} from 'react-router-dom';
import {isCookieSet, logoutServer} from "../../../interfaces/cookies";
import {ContextoRol} from "../../../contexto/Roles";

// Componente para div de cerrar sesion. Elimina la cookie asociada a la sesión
// Vista: compartido

const CerrarSesionBoton = () => { 
    const [cargando, setCargando] = useState();
    const [logged, setLogged] = useState();
    
    const {setCookie} = React.useContext(ContextoRol);
    
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
                setCookie(null);
                nav("/");
            });
        }
    }



    if(!cargando && cookies.get("loginCookie") !== undefined && logged === true){
        return (        
            <button className='botoncerrarsesion' onClick={handleLogOut}>
                Cerrar Sesión
            </button>
        );
    }
    }

export default CerrarSesionBoton;