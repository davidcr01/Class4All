import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Vista: admins

const Menu = (props) => {
    const nav = useNavigate();
    return (
        <div className="usuario">
            <div className="datosuser">{props.user.nombre} {props.user.apellido1} {props.user.apellido2}</div>
            <div className="botonesuser">
                <div className="botonuser botonuser-modificar">Modificar</div>
                <div className="botonuser botonuser-eliminar" id>Eliminar</div>
                
                    <button className="botonuser botonuser-ver" onClick={() => nav("/info-menus")}>
                        {"ver"}
                    </button>
                
            </div>
        </div>
    )

}

export default Menu;