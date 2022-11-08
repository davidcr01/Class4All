import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
import { isCookieSet, loginUser } from '../../interfazCookies/cookies';

//Hace falta comprobar si ya existe

const Profesores = (props) => {

    let cookieSet=undefined;

    useEffect(()=>{
        cookieSet=isCookieSet();
    }, [])

    const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        loginUser(username).then((sessionID)=>{
            alert("resultado: "+sessionID);
            if(sessionID !== undefined){
                //alert(sessionID);
                cookies.set("loginCookie", sessionID, {maxAge: 86400});
                nav("/");
            }
        });
    }
    
    const cookies = new Cookies();

    //Para obtener valor variables
    const [password, setPassword] = useState();     //Para uso futuro
    const [username, setUsername] = useState()

    const handlePassword= (e) => {
        setPassword(e.target.value);
    }

    const handleUsername= (e) => {
        setUsername(e.target.value);
    }

    let prueba=[];

    const style = {
        width: "50%",
        backgroundColor: "#E2E2E2", 
        borderColor: "black", 
        borderStyle: "solid", 
        borderWidth: "3px", 
        marginBottom: "5px", 
        fontSize: "2vw", 
        /*textAlign:"center", podriamos descomentar este y comentar el estilo del form*/
        padding: "3vw 0",
    };

    const style2 = {
        width:"100%", 
        height: "auto",
        paddingTop:"15px", 
        paddingBottom:"15px", 
        justifyContent: "center", 
        display: "flex", 
        marginRight:"auto", 
        marginLeft:"auto",
    };

    const formulario = {
        marginLeft:"5%",
    };

    //Da warning
    prueba.push(
        <div style={style}>
            <form style={formulario} onSubmit={handleSubmit} action="#">
                <label htmlFor="fname">Usuario:</label><br/>
                <input type="text" id="fname" name="fname" onChange={handleUsername}></input><br/><br/>
                <label htmlFor="fname">Contraseña:</label><br/>
                <input type="text" id="fname" name="fname" onChange={handlePassword}></input>
                <p>¿Ha olvidado su contraseña?</p>
                <input type="submit" value="Entrar"></input>
            </form>
        </div>
    );


    if(cookies.get("loginCookie")===undefined || !cookieSet)
    return (
        <div style={style2}>
            {prueba}
        </div>
    );
    else if(cookies.get("loginCookie")!==undefined && cookieSet)
        return (
            <div>
                <h1>Sesion ya iniciada</h1>
            </div>
        )

}

export default Profesores;