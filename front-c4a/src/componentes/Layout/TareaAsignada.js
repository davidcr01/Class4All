import React from 'react';
const TareaAsignada = (props) => {
    let user = null;

    console.log(props.tarea.usuarioAsignado)

    fetch('http://localhost:3900/api/usuarios/user/'+props.tarea.usuarioAsignado,
    ).then(res => res.json()).then(result => {
        user = result.nombre;    
        console.log("dsf" + result);
    })


    return(
        <div className="tarea">
            <div>Tarea: {props.tarea.nombre}</div>
            <div>Fecha: {props.tarea.fechaAsignada}</div>
            <div>Usuario: {props.tarea.usuarioAsignado}</div>
            <div>Realizado: No</div>
            <div>Confirmar <input type="checkbox"></input></div>

        </div>
    )
}

export default TareaAsignada;