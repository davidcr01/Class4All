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

        let sessionID=undefined;
       const loginUser = async () => {
            //console.log("server: "+usernameServer);
            try {
                const url = "http://localhost:3900/api/usuarios/userLogin/";
                console.log(url);
                const res = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({correo: username})
                })

                const data = await res.json();

                console.log(data);

                if(data.status === "success"){
                    sessionID = data.sessionID;
                }

            } catch (error) {
                console.log(error);

            }        
        }   
        
        loginUser().then(()=>{
            alert("resultado: "+sessionID);
            if(sessionID !== undefined){
                //alert(sessionID);
                cookies.set("loginCookie", sessionID);
                nav("/");
            }
        });
    }
    
    const cookies = new Cookies();

    //Para obtener valor variables
    const [password, setPassword] = useState();
    const [username, setUsername] = useState()
    //const [usernameServer, setUsernameServer] = useState();

    const handlePassword= (e) => {
        setPassword(e.target.value);

        //console.log(e.target.value);
    }

    const handleUsername= (e) => {
        setUsername(e.target.value);

        //console.log(e.target.value);
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
            <div>
                <h1>Sesion ya iniciada</h1>
            </div>
        )

}

export default Profesores;