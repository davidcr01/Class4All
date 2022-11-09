import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const PantallasGestion = (props) => {
    const nav = useNavigate();
    let botones=[];
    const informacion = [
        {apartado: "Gestión de usuarios", enlace: "/gestion-usuarios", rol: "Administrador"},
        {apartado: "Gestión de tareas", enlace: "/gestion-tareas", rol: "Profesor"},
        {apartado: "Gestión de menús", enlace: "/login-ok", rol: "Administrador"},
        {apartado: "Comandas", enlace: "/login-ok", rol: "Administrador"},
        {apartado: "Stock", enlace: "/login-ok", rol: "Administrador"},
        {apartado: "Chat", enlace: "/login-ok", rol: "Profesor"},
    ]

    const style = {
        width: "auto", 
        backgroundColor: "#E2E2E2", 
        borderColor: "black", 
        borderStyle: "solid", 
        borderWidth: "3px", 
        display: "grid", 
        marginBottom: "5px", 
        fontSize: "3vw", 
        textAlign:"center", 
        paddingTop: "4vw",
        paddingBottom: "3vw",
        fontWeight: "bold",
        borderRadius: "25px"
    };
    
    const cookies = new Cookies();

    const isRoleRight = (index) => {
        let res = false;
        const infoCookie = cookies.get("loginCookie");

        if((infoCookie.rol === "Profesor" && informacion[index].rol === "Profesor") || infoCookie.rol === "Administrador")
            res = true;

        return res;
    }

    for(let i=0; i< informacion.length; i++){
        if(isRoleRight(i)){
            botones.push(
            <div style={style} onClick={() => nav(informacion[i].enlace)}>
                {informacion[i].apartado}
            </div>
            );
        }
    }

    const style2 = {
        width:"100%", 
        paddingTop:"15px", 
        paddingBottom:"15px", 
        justifyContent: "center", 
        display: "grid", 
        marginRight:"auto", 
        marginLeft:"auto", 
        gridTemplateColumns: "30% 30%", 
        gridTemplateRows:"13vw 13vw 13vw", 
        gridColumnGap: "20px", 
        gridRowGap: "15px"
    };

    return(
        <div style={style2}>
            {botones}
        </div>
    );

}

export default PantallasGestion;