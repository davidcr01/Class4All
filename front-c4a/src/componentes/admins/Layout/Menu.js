import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

// Vista: admins
// Componente que representa cada item de la lista de menús,
// contiene los botones de eliminar, modificar, etc.
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
                <Button variant='contained'>Modificar</Button>
                <Button variant='contained' color='error' onClick={eliminarMenu} startIcon={<DeleteIcon />}>Eliminar</Button>
                <Button variant='contained' onClick={() => nav("/info-menus")}>Ver</Button>
            </div>
        </div>
    )

}

export default Menu;