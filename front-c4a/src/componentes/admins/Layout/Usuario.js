import React, { useEffect, useState } from 'react';

// Vista: admins

const Usuario = (props) => {
    return (
        <div className="usuario">
            <div className="datosuser">{props.user.nombre} {props.user.apellido1} {props.user.apellido2}</div>
            <div className="botonesuser">
                <div className="botonuser botonuser-modificar">Modificar</div>
                <div className="botonuser botonuser-eliminar">Eliminar</div>
                <div className="botonuser botonuser-ver">Ver</div>
            </div>
        </div>
    )

}

export default Usuario;