import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
import { isCookieSet, loginUser } from '../../interfazCookies/cookies';

//Hace falta comprobar si ya existe

const Profesores = (props) => {

    const [cookieSet, setCookieSet] = useState(false);
    const [cargando, setCargando] = useState(true);

    useEffect(()=>{
        //cookieSet=isCookieSet();
        isCookieSet().then((res) => {
            setCookieSet(res);
            setCargando(false);
        });
    }, [])

    const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        loginUser(username).then((response)=>{
            alert("resultado: "+JSON.stringify(response));
            if(response !== undefined){
                //alert(sessionID);
                cookies.set("loginCookie", {id: response.id, sessionID: response.sessionID, rol: response.rol}, {maxAge: 86400});
                nav("/gestion-centro");
            }
        });
    }
    const style4 = {position: "absolute", width: "10%", height: "auto%", bottom: "40%", right: "2%"};
let user = require("../../img/user.png")
    const handleClick = () =>{
        nav("/sesion-alumnos-clases");
      };
    
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
        borderRadius: "15%"
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
                <label htmlFor="fname" style={{fontWeight:"bold"}}>Usuario:</label><br/>
                <input type="text" id="fname" name="fname" onChange={handleUsername}></input><br/><br/>
                <label htmlFor="fname" style={{fontWeight:"bold"}}>Contraseña:</label><br/>
                <input type="password" id="fname" name="fname" onChange={handlePassword}></input>
                <p>¿Ha olvidado su contraseña?</p>
                <input className='boton-enviar' type="submit" value="Entrar"></input>
            </form>
        </div>
    );

    if(!cargando){
        if(cookies.get("loginCookie")===undefined || !cookieSet){
        return (
            <div style={style2}>
                {prueba}
                    <img style={style4} src={user} onClick={handleClick}></img>

            </div>
            
        );
        }
        else if(cookies.get("loginCookie")!==undefined && cookieSet){
            return (
                <div>
                    <h1>Sesion ya iniciada</h1>
                </div>
            )
        }
    }

}

export default Profesores;