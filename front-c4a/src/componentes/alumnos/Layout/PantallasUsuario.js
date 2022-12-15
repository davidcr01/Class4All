import React from 'react';
import {useNavigate} from 'react-router-dom';

// Vista: alumnos
// Componetente para mostrar los submenús del menú principal de los alumnos

const PantallasUsuario = (props) => {
    let botones=[];

    const informacion = [
        {apartado: "TAREAS", pictograma: require("../../../img/tareas.png"), enlace: "/Tareas"},
        {apartado: "CHAT", pictograma: require("../../../img/chat.png"), enlace: "/login-ok"},
        {apartado: "RETROALIMENTACION", pictograma: require("../../../img/retroalimentacion.png"), enlace: "/login-ok"},
        {apartado: "CONSENTIMIENTO", pictograma: require("../../../img/firmar.png"), enlace: "/login-ok"},
    ]


    const nav = useNavigate();

    // Se itera sobre los apartados definidos anteriormente. Escalable si se quieren añadir más apartados
    for(let i=0; i< informacion.length; i++){
        botones.push(
            <button key={informacion[i].apartado} className="botonesPP" onClick={() => nav(informacion[i].enlace)}>
                <img className='imgpantalla' src={informacion[i].pictograma}/>
                {informacion[i].apartado}
            </button>
        );
    }

    return (
        <div className='imgspantalla'>
            {botones}
        </div>
    );

}

export default PantallasUsuario;