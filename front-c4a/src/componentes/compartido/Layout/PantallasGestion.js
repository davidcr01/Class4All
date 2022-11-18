import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

// Vista: compartida entre profs y admins

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
            <button className="botonesGC" onClick={() => nav(informacion[i].enlace)}>
                {informacion[i].apartado}
            </button>
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