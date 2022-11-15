import React from 'react';
import {useNavigate} from 'react-router-dom';

const PantallasUsuario = (props) => {
    let botones=[];
   
    const informacion = [
        {apartado: "Tareas", pictograma: require("../../img/tareas.png"), enlace: "/Tareas"},
        {apartado: "Chat", pictograma: require("../../img/chat.png"), enlace: "/login-ok"},
        {apartado: "Retroalimentación", pictograma: require("../../img/retroalimentacion.png"), enlace: "/login-ok"},
        {apartado: "Consentimiento", pictograma: require("../../img/firmar.png"), enlace: "/login-ok"},        
    ]

    const style = {
        width: "auto", 
        cursor:"pointer",

        backgroundColor: "#E2E2E2", 
        borderColor: "black", 
        borderStyle: "solid", 
        borderWidth: "3px", 
        display: "grid",
        marginBottom: "5px", 
        fontSize: "3.5vw", 
        textAlign:"center", 
        padding: "2vw 0",
        borderRadius: "25px",
        fontWeight: "bold"
    };

    const style2 = {width: "30%", height: "auto", display: "block", marginLeft: "auto", marginRight: "auto"};

    const style3 = {width:"100%", paddingTop:"15px", paddingBottom:"15px", justifyContent: "center", display: "grid", marginRight:"auto", marginLeft:"auto", gridTemplateColumns: "35% 35%", gridTemplateRows:"20vw 20vw", gridColumnGap: "40px", gridRowGap: "15px"};

    const nav = useNavigate();
    
    for(let i=0; i< informacion.length; i++){
        botones.push(
            <div style={style} onClick={() => nav(informacion[i].enlace)}>
                <img style={style2} src={informacion[i].pictograma}/>
                {informacion[i].apartado}
            </div>
        );
    }

    return (
        <div style={style3}>
            {botones}
        </div>
    );

}

export default PantallasUsuario;