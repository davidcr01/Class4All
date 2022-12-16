import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CargandoProgress from '../../../compartido/Layout/CargandoProgress';
import { showDate } from '../../../../interfaces/dates';

// Vista: compartida (admins y profs)
// Componente para gestionar cada tarea: eliminar, desasignar, ver su infomarción

const TareaAsignada = (props) => {

    const [nombre, setNombre] = useState('');
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        getUser();
    }, []);

    const desasignarTarea = (event) => {
        event.preventDefault();

        const url = "http://localhost:3900/api/tareas/desasignar-tarea/" + props.tarea._id;

        fetch(url, {
            method: 'PUT',
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

    const eliminarTarea = (event) => {
        event.preventDefault();
        const url = "http://localhost:3900/api/tareas/eliminar-tareaDia/" + props.tarea._id;

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


    const getUser = async () => {
        try {
            const url = "http://localhost:3900/api/usuarios/get-usuario/" + props.tarea.usuarioAsignado
            console.log(url);
            const res = await fetch(url)
            const data = await res.json();


            setNombre(data.usuario.nombre);
            setCargando(false);

        } catch (error) {
            console.log(error);

        }
    }

            if(cargando){
                return <CargandoProgress/>
            }else{

                const confirmarTarea = () => {
                    let decision = window.confirm("¿Está seguro de que desea confirmar la tarea como REALIZADA?");

                    if(decision){
                        const url = "http://localhost:3900/api/tareas/completar-tarea-profesor/"

                        fetch(url,{
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({idTarea: props.tarea._id})
                        }).then(res => res.json()).then(data => {
                            if(data.status === "success"){
                                //alert("La tarea ha sido confirmada con éxito");
                                props.setNeedsRender(!props.needsRender);
                            }
                            else
                                alert("Ha habido un error al confirmar la tarea");
                        })
                        .catch(error => alert(error));
                            
                    }
                    else{
                        alert("La tarea no ha sido confirmada, ningún dato ha sido modificado.");
                    }
                }

                return (
                <div className="tarea">
                <div><label className='label-tareas'>Tarea:</label> {props.tarea.nombre}</div>
                <div><label className='label-tareas'>Fecha Asignada:</label> {showDate(props.tarea.fechaAsignada)}</div>
                <div><label className='label-tareas'>Fecha Límite:</label> {showDate(props.tarea.fechaLimite)}</div>
                <div><label className='label-tareas'>Fecha Acabada:</label> {(props.tarea.fechaAcabada === null)? "Sin terminar": showDate(props.tarea.fechaAcabada)}</div>
                <div><label className='label-tareas'>Usuario:</label> {nombre}</div>
                <div><label className='label-tareas'>Realizado:</label> No</div>
                {/*<div><label className='label-tareas'>Confirmar</label> <input type="checkbox"></input></div>*/}
                <div><button id='confirmar-tarea' onClick={confirmarTarea}>Confirmar</button></div>
                <form onSubmit={desasignarTarea}><input type="submit" value="Desasignar"/></form>
                <button className="Eliminar"><DeleteIcon style={{cursor: "pointer"}} onClick={eliminarTarea}/></button>

            </div>)
            }


    }

    export default TareaAsignada;