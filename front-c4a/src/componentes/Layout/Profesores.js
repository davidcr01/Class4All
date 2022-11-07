import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
//import img from "../../img/agenda.png"
import Cookies from 'universal-cookie';

//Hace falta comprobar si ya existe

const Profesores = (props) => {
    const nav = useNavigate();

    const handleSubmit = (e) => {
        //console.log(e);
        e.preventDefault();

        cookies.set("loginCookie", "OK", {path: "/"});

        alert("username"+username)
        alert("password"+password);

        nav("/login-ok");
        //alert("asdasd")
    }


    //Para obtener valor variables
    const [password, setPassword] = useState();
    const [username, setUsername] = useState()

    const handlePassword= (e) => {
        setPassword(e.target.value);

        //console.log(e.target.value);
    }

    const handleUsername= (e) => {
        setUsername(e.target.value);

        //console.log(e.target.value);
    }

    const cookies = new Cookies();
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

    prueba.push(
        <div style={style}>
            <form style={formulario} onSubmit={handleSubmit} action="#">
                <label for="fname">Usuario:</label><br/>
                <input type="text" id="fname" name="fname" onChange={handleUsername}></input><br/><br/>
                <label for="fname">Contraseña:</label><br/>
                <input type="text" id="fname" name="fname" onChange={handlePassword}></input>
                <p>¿Ha olvidado su contraseña?</p>
                <input type="submit" value="Entrar"></input>
            </form>
        </div>
    );

    if(cookies.get("loginCookie")===undefined)
    return (
        <div style={style2}>
            {prueba}
        </div>
    );
    else
        return (
            <h1>Sesion ya iniciada</h1>
        )

}

export default Profesores;