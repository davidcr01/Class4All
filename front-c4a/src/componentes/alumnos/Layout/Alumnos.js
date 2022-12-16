import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";
import { loginAlumno } from '../../../interfaces/cookies';
import {setTamsIconos, setTamsLetra} from '../../../interfaces/tamaños';
import { ContextoRol } from '../../../contexto/Roles';

// Componente para mostrar el login de los alumnos
// Vista: compartido

const Alumnos = ({alumnos}) => {

    const {setCookie} = React.useContext(ContextoRol);

    const nav = useNavigate();
    
    if(alumnos !== undefined) {
        let alumnosJSX = []
        const cookies = new Cookies();
        let tamanios
        const loginUser = (id, i) => {
            loginAlumno(id).then((data) => {
                if(data !== undefined){
                    cookies.set("loginCookie", {id: data.id, sessionID: data.sessionID, rol: data.rol}, {maxAge: 86400});
                    setCookie('Alumno');

                    setTamsLetra(data.tamañoLetra);
                    setTamsIconos(data.tamañoIconos);
                    nav('/');
                }
            });                    
        }

        for(let i=0; i<alumnos.length; i++){
            alumnosJSX.push(
                <button key={(alumnos[i]._id)} className="botonesAlumnos" onClick={()=> loginUser(alumnos[i]._id, i)}>
                    <img className="foto" src={"http://localhost:3900/api/usuarios/get-foto/"+alumnos[i]._id}/>
                    {alumnos[i].nombre}
                </button>
            )
        }

        return  (
            <div className="cuerpo">
                <div className="recuadrosalumnos">
                    {alumnosJSX}
                </div>
            </div>
        )
    }
}

export default Alumnos;