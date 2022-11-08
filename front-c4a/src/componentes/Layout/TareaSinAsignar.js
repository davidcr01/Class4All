
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/material/icons/Delete';

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
         const url = "http://localhost:3900/api/tareas/asignar-tarea/" + props.tarea._id + "/" + idUsuario;

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

    



    const getUser = async () => {
        try {
            setUsuarios(props.usuarios);
            setCargando(false);

        } catch (error) {
            console.log(error);

        }
    }

    if (cargando) {
        return <div>Cargando...</div>
    } else {
        return (
            <div className="tarea">
                <div>Tarea: {props.tarea.nombre}</div>
                <div>Fecha: {props.tarea.fechaAsignada}</div>
                <div>Usuario: <form onSubmit={asignarTarea}><select id="user" name="Usuario">
                    {usuarios.map(u => {
                        return (
                            <option value={u._id}>{u.nombre}</option>
                        )
                    })}
                </select>
                    <input type="submit" value="Asignar" />
                </form>

                </div>
                <div className="Eliminar"><i class="fa-solid fa-trash-can"></i>sds</div>
            </div>)
    }


}

export default TareaSinAsignar;
