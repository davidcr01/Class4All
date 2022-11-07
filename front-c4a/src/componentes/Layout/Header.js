import React from 'react';
import CerrarSesionBoton from './CerrarSesionBoton';
import Cookies from 'universal-cookie';

const Header = (props) => {
    /*
    return (
        React.createElement(
            "h1",
            { style: { height: "60px", fontSize: "35pt",  color: "#0099D7", backgroundColor: "#E2E2E2", textAlign: "center"} },
            <>{props.titulo}
            <CerrarSesionBoton/></>)
    );
    */

    const style = {
        height: "60px", 
        fontSize: "35pt", 
        color: "#0099D7", 
        backgroundColor: "#E2E2E2", 
        textAlign: "center"
    };

    const cookies=new Cookies();

    if(cookies.get("loginCookie")!== undefined)
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