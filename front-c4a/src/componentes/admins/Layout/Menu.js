import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Vista: admins

const Menu = (props) => {
    const nav = useNavigate();

    const eliminarMenu = (event) => {
        event.preventDefault();
        const url = "http://localhost:3900/api/menus/eliminar-menu/" + props.menu._id;

        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                window.location.reload();
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="usuario">
            <div className="datosuser">{props.menu.nombre} {props.menu.apellido1} {props.menu.apellido2}</div>
            <div className="botonesuser">
                <div className="botonuser botonuser-modificar">Modificar</div>
                    <button className="botonuser botonuser-eliminar" onClick={eliminarMenu}>
                        Eliminar
                    </button>
                    <button className="botonuser botonuser-ver" onClick={() => nav("/info-menus")}>
                        {"ver"}
                    </button>
                
            </div>
        </div>
    )

}

export default Menu;