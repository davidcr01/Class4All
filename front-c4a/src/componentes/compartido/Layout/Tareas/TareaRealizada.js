import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import CargandoProgress from '../../../compartido/Layout/CargandoProgress';
import { showDate } from '../../../../interfaces/dates';

// Vista: compartida (admins y profs)
// Idem que TareaAsginada pero para Realizada


const TareaRealizada = (props) => {

    const [nombre, setNombre] = useState('');
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        setCargando(true);
        getUser();
    }, []);

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
            const res = await fetch(url)
            const data = await res.json();


            setNombre(data.usuario.nombre);
            setCargando(false);

        } catch (error) {
            console.log(error);

        }
    }


    if (cargando) {
        return <CargandoProgress/>
    } else {
        return (
            <div className="tarea">
                <div><label className='label-tareas'>Tarea:</label> {props.tarea.nombre}</div>
                <div><label className='label-tareas'>Fecha Asignada:</label> {showDate(props.tarea.fechaAsignada)}</div>
                <div><label className='label-tareas'>Fecha Finalización:</label> {showDate(props.tarea.fechaAcabada)}</div>
                <div><label className='label-tareas'>Usuario:</label> {nombre}</div>
                <div><label className='label-tareas'>Realizado:</label> Si</div>
                <div><label className='label-tareas'>Confirmar:</label> <input type="checkbox"></input></div>
                <div className="botonesTareasReal">
                    <Button variant='contained' color='success'>BIEN</Button>
                    <Button variant='contained' style={{backgroundColor: "orange",}}>TARDE</Button>
                    <Button variant='contained' color='error' >MAL</Button>
                </div>

                <form>
                    <textarea name="message" rows="5" cols="80">
                        Retroalimentación:
                    </textarea>
                </form>
                <div className="Eliminar"><DeleteIcon style={{cursor: "pointer"}} onClick={eliminarTarea}/></div>


            </div>)
    }


}

export default TareaRealizada;