import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CargandoProgress from './CargandoProgress';

const TareaNoRealizada = (props) => {

    const [nombre, setNombre] = useState('');
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        setCargando(true);
        getUser();
    }, []);

    const eliminarTarea = (event) => {
        event.preventDefault();
        console.log("asdasd");
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
            const url = "http://localhost:3900/api/usuarios/user/" + props.tarea.usuarioAsignado
            console.log(url);
            const res = await fetch(url)
            const data = await res.json();

            console.log(data);

            setNombre(data.usuario.nombre);
            setCargando(false);

            console.log(nombre);
            console.log(props.tarea.usuarioAsignado);

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
                <div><label className='label-tareas'>Fecha:</label> {props.tarea.fecha}</div>
                <div><label className='label-tareas'>Usuario:</label> {nombre}</div>
                <div><label className='label-tareas'>Realizado:</label> No</div>
                <div>Confirmar: <input type="checkbox"></input></div>
                <div className="botonesTareasReal">
                    <div className="botonTareasReal">BIEN</div>
                    <div className="botonTareasReal">MAL</div>
                    <div className="botonTareasReal">TARDE</div>
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

export default TareaNoRealizada;
