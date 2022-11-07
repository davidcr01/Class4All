import React, { useEffect } from 'react';
import CerrarSesionBoton from './CerrarSesionBoton';
import Cookies from 'universal-cookie';
import { isCookieSet } from '../../interfazCookies/cookies';

const Header = (props) => {
    const style = {
        height: "60px", 
        fontSize: "35pt", 
        color: "#0099D7", 
        backgroundColor: "#E2E2E2", 
        textAlign: "center"
    };

    let cookieSet=undefined;

    useEffect(()=>{
        cookieSet=isCookieSet();
    }, [])

    const cookies=new Cookies();

    console.log(cookieSet);
    //const result = await isCookieSet();
    
    if(cookies.get("loginCookie") !== undefined && cookieSet === true)
    return (
        <div>
            <h1 style={style}><>{props.titulo}
            <CerrarSesionBoton/></></h1>
        </div>
    );
    else{
        return (
            <div>
                <h1 style={style}><>{props.titulo}</></h1>
            </div>
        );        
    }
}

export default Header;