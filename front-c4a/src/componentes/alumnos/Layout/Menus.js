import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";
import { loginAlumno } from '../../../interfazCookies/cookies';

import { ContextoRol } from '../../../contexto/Roles';

// Componente para mostrar el login de los alumnos
// Vista: compartido

const Menus = ({menus}) => {
    let user = require("../../../img/user.png")

    const {setCookie} = React.useContext(ContextoRol);

    
    const nav = useNavigate();

    if(menus !== undefined) {
        let menusJSX = []
        const cookies = new Cookies();

        const loginUser = (id) => {
            loginAlumno(id).then((data) => {
                if(data !== undefined){
                    cookies.set("loginCookie", {id: data.id, sessionID: data.sessionID, rol: data.rol}, {maxAge: 86400});
                    setCookie('Alumno');
                    nav('/');
                }


                //nav("/pagina-principal");
            });
        }

        for(let i=0; i<menus.length; i++){
            menusJSX.push(
                <button key={(menus[i]._id)} className="botonesAlumnos" onClick={()=> loginUser(menus[i]._id)}>
                    <img className="foto" src={"http://localhost:3900/api/menus/obtenerfoto/"+menus[i]._id}/>
                    {menus[i].nombre}
                </button>
            )
        }

        return  (
            <div className="cuerpo">
                <div className="recuadrosalumnos">
                    {menusJSX}
                </div>
            </div>
        )
    }
/*
    else{
        return (
            <div>
                <h1>NO HAY menus EN ESTA CLASE</h1>
            </div>
        )
    }
    */
}

export default Menus;