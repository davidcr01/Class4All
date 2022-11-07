import React from 'react';
import Cookies from 'universal-cookie';
import {useNavigate} from 'react-router-dom';

//Componente para div de cerrar sesion
const CerrarSesionBoton = () => {    
    const nav=useNavigate();
    const cookies = new Cookies();

    const handleLogOut = (e) => {

        //alert(cookies.get("loginCookie"));

        //cookies.remove("loginCookie");

        const getCookie = async () => {
            try {
                const url = "http://localhost:3900/api/usuarios/cookie/" + cookies.get("loginCookie");
                console.log(url);
                const res = await fetch(url)
                const data = await res.json();
    
                console.log(data);
    
                //setNombre(data.usuario.nombre);
                //setCargando(false);
                
                //console.log(nombre);
                //console.log(props.tarea.usuarioAsignado);
                
            } catch (error) {
                console.log(error);
    
            }                        
        }

        if(cookies.get("loginCookie") !== undefined){
            getCookie().then(() =>{
                cookies.remove("loginCookie");
                nav("/");
            });
        }

    }

    const style = {
        position: "absolute", 
        top: "3.3%", 
        width: "20%", 
        right:"2%", 
        fontSize: "50%",  
        color: "black", 
        backgroundColor: "#F1F1F1"
    };

    return (
        //React.createElement("div", {style: {position: "absolute", top: "3.3%", width: "20%", right:"2%", fontSize: "50%",  color: "black", backgroundColor: "#F1F1F1"}}, "Cerrar Sesión")
        
        <button style={style} onClick={handleLogOut}>
            Cerrar Sesión
        </button>
    );
}

export default CerrarSesionBoton;