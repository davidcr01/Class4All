import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { isCookieSet, loginUser } from '../../../interfaces/cookies';
import { ContextoRol } from '../../../contexto/Roles';

// Vista: compatido entre profesores y admins

// Inicio sesión de profesores y adminsitradores
//Hace falta comprobar si ya existe

const Profesores = (props) => {

    const [cookieSet, setCookieSet] = useState(false);
    const [cargando, setCargando] = useState(true);

    const { setCookie } = React.useContext(ContextoRol);

    useEffect(() => {
        //cookieSet=isCookieSet();
        isCookieSet().then((res) => {
            setCookieSet(res);
            setCargando(false);
        });
    }, [])

    const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        loginUser(username).then((response) => {
            if (response !== undefined) {
                //alert(sessionID);
                cookies.set("loginCookie", { id: response.id, sessionID: response.sessionID, rol: response.rol }, { maxAge: 86400 });
                setCookie(response.rol);
                nav("/");
            }
        });
    }
    let user = require("../../../img/user.png")
    const handleClick = () => {
        nav("/sesion-alumnos-clases");
    };

    const cookies = new Cookies();

    //Para obtener valor variables
    const [password, setPassword] = useState();     //Para uso futuro
    const [username, setUsername] = useState()

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    let prueba = [];





    //Da warning
    prueba.push(
        <div className="formregistro">
            <form className="formulario" onSubmit={handleSubmit} action="#">
                <label htmlFor="fname" style={{ fontWeight: "bold" }}>Usuario:</label><br />
                <input type="text" id="fname" name="fname" onChange={handleUsername}></input><br /><br />
                <label htmlFor="password" style={{ fontWeight: "bold" }}>Contraseña:</label><br />
                <input type="password" id="password" name="password" onChange={handlePassword}></input>
                <p>¿Ha olvidado su contraseña?</p>
                <input className='boton-enviar' type="submit" value="Entrar"></input>
            </form>
        </div>
    );

    if (!cargando) {
        if (cookies.get("loginCookie") === undefined || !cookieSet) {
            return (
                <div className="registro">
                    {prueba}
                    <img className="imgUserProfesores" src={user} onClick={handleClick}></img>

                </div>

            );
        }
        else if (cookies.get("loginCookie") !== undefined && cookieSet) {
            return (
                <div>
                    <h1>Sesion ya iniciada</h1>
                </div>
            )
        }
    }

}

export default Profesores;