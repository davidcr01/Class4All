
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CargandoProgress from '../../../compartido/Layout/CargandoProgress';

// Vista: compartida (admins y profs)

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
        const idUsuario = document.getElementById("user").value;
         const url = "http://localhost:3900/api/tareas/asignar-tarea/" + props.tarea._id + "/" + event.target.Usuario.value;

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
                <div><label className='label-tareas'>Fecha:</label> {props.tarea.fechaAsignada}</div>
                <div><label className='label-tareas'>Usuario:</label> <form onSubmit={asignarTarea}><select id="user" name="Usuario">
                    {usuarios.map(u => {
                        return (
                            <option value={u._id}>{u.nombre}</option>
                        )
                    })}
                </select>
                    <input type="submit" value="Asignar" />
                </form>

                </div>
                <div className="Eliminar"><DeleteIcon style={{cursor: "pointer"}} onClick={eliminarTarea}/></div>
            </div>)
    }
}

export default TareaSinAsignar;