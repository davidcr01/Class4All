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


    const nav = useNavigate();

    for(let i=0; i< informacion.length; i++){
        botones.push(
            <button key={informacion[i].apartado} className="botonesPP" onClick={() => nav(informacion[i].enlace)}>
                <img className='imgpantallausuario' src={informacion[i].pictograma}/>
                {informacion[i].apartado}
            </button>
        );
    }

    return (
        <div className='imgspantallausuario'>
            {botones}
        </div>
    );

}

export default PantallasUsuario;