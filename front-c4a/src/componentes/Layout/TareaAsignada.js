import React from 'react';
const TareaAsignada = (props) => {
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