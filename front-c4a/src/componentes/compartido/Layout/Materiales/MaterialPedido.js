import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CargandoProgress from '../../../compartido/Layout/CargandoProgress';
import { ListItem } from '@mui/material';

// Vista: compartida (administradores y profesores)

const MaterialPedido = ({profesorID, alumno, materiales, tareaID}) => {


    const fRecibido = (props) => {
        const url = "http://localhost:3900/api/tareas/completar-tarea-profesor/" + profesorID;

        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({idTarea: props.tarea._id})           
        }
        fetch(url, requestOptions)
            .then(res => res.json())
            .then(data => {
                if(data.status === "success"){
                    props.setNeedsRender(!props.needsRender);
                }
            })
            .catch(error => alert(error));
    }
    
    const eliminarMateriales = (event) => {
        event.preventDefault();
        const url = "http://localhost:3900/api/materiales/eliminar-peticion/" + profesorID;

        var requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()           
        }

        fetch(url, requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                window.location.reload();
            })
            .catch(err => console.log(err));
    }


    const realizadaState = "No";
    //if (entregaMateriales.realizada) {
    //    realizadaState = "Sí";
    //}
    
    
    const pedidos = materiales.map(mat => 
        <>
            <article>
                Material: {mat.material}
                Cantidad: {mat.cantidad}
            </article>
        </>
    );
    //Pedidos devolverá todos los materiales pedidos (para cada uno, el material, la cantidad, si está o no realizado y el checkbox)
    return (
        <section className="materiales">
            Alumno: {alumno}
            {pedidos}   
            Realizado: {realizadaState}

            <button className = "boton-anadir" onClick={(fRecibido)}>Recibido</button>
            <button className="boton-eliminar"><DeleteIcon style={{cursor: "pointer"}} onClick={eliminarMateriales}/></button>

        </section>
    )




}

export default MaterialPedido;


