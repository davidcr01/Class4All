
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import CargandoProgress from '../../../compartido/Layout/CargandoProgress';
import { showDate } from '../../../../interfaces/dates';

// Vista: compartida (admins y profs)
// Idem que TareaAsginada pero para sinAsignar

const TareaSinAsignar = (props) => {

    const [usuarios, setUsuarios] = React.useState([{}]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        setCargando(true);
        getUser();
    }, []);

    const asignarTarea = (event) => {
        event.preventDefault();

        //get value from select
        //const idUsuario = document.getElementById("user").value;
         const url = "http://localhost:3900/api/tareas/asignar-tarea/";// + props.tarea._id + "/" + event.target.Usuario.value;

         //alert(url);
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({idTarea: props.tarea._id, idAlumno: event.target.Usuario.value})
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
            setUsuarios(props.usuarios);
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
                <div><label className='label-tareas'>Fecha límite:</label> {showDate(props.tarea.fechaLimite)}</div>
                <div><form onSubmit={asignarTarea}>
                    <label className='label-tareas'>Asignar a: </label>
                    <select id="user" name="Usuario" style={{fontSize: "1em"}}>
                    {usuarios.map(u => {
                        return (
                            <option value={u._id}>{u.nombre}</option>
                        )
                    })}
                    </select>
                    <Button style={{marginLeft: "0.5em"}} variant='contained' type='submit' endIcon={<SendIcon />}>Asignar</Button>
                </form>

                </div>
                <button className="Eliminar"><DeleteIcon style={{cursor: "pointer"}} onClick={eliminarTarea}/></button>
            </div>)
    }
}

export default TareaSinAsignar;