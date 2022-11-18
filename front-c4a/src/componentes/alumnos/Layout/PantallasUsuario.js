import React from 'react';
import {useNavigate} from 'react-router-dom';

// Vista: alumnos

const PantallasUsuario = (props) => {
    let botones=[];

    const informacion = [
        {apartado: "Tareas", pictograma: require("../../../img/tareas.png"), enlace: "/Tareas"},
        {apartado: "Chat", pictograma: require("../../../img/chat.png"), enlace: "/login-ok"},
        {apartado: "Retroalimentación", pictograma: require("../../../img/retroalimentacion.png"), enlace: "/login-ok"},
        {apartado: "Consentimiento", pictograma: require("../../../img/firmar.png"), enlace: "/login-ok"},
    ]

    const style2 = {width: "30%", height: "auto", display: "block", marginLeft: "auto", marginRight: "auto"};

    const style3 = {width:"100%", paddingTop:"15px", paddingBottom:"15px", justifyContent: "center", display: "grid", marginRight:"auto", marginLeft:"auto", gridTemplateColumns: "35% 35%", gridTemplateRows:"20vw 20vw", gridColumnGap: "40px", gridRowGap: "15px"};

    const nav = useNavigate();

    for(let i=0; i< informacion.length; i++){
        botones.push(
            <button className="botonesPP" onClick={() => nav(informacion[i].enlace)}>
                <img style={style2} src={informacion[i].pictograma}/>
                {informacion[i].apartado}
            </button>
        );
    }

    return (
        <div style={style3}>
            {botones}
        </div>
    );

}

export default PantallasUsuario;