import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Button } from '@mui/material';
import CargandoProgress from '../../../compartido/Layout/CargandoProgress';
import { showDate } from '../../../../interfaces/dates';

// Vista: compartida (admins y profs)
// Idem que TareaAsginada pero para NoRealizada

const TareaNoRealizada = (props) => {

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

    //CREADO NUEVO PARA MANDAR LA CONFIRMACIÓN Y LA RETROALIMENTACIÓN ETC
    //FALTA arreglar para que funcione de vd y además de confirmar que se ha realizado, se mande la retroalimentación
    const confirmarTarea = () => {
        const url = "http://localhost:3900/api/tareas/completar-tarea-profesor/" + props.tarea._id;

        fetch(url, {method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
               // window.location.reload();
            })
            .catch(err => console.log(err));
    }

    //QUITADA LA PARTE DE BIEN/MAL PORQUE NO TIENE SENTIDO
    //CAMBIADO EL CHECKBOX DE CONFIRMAR POR UN BOTÓN
    //ELIMINAR ES AHORA UN BOTÓN EN VEZ DE UN DIV
    if (cargando) {
        return <CargandoProgress/>
    } else {
        return (
            <div className="tarea">
                <div><label className='label-tareas'>Tarea:</label> {props.tarea.nombre}</div>
                <div><label className='label-tareas'>Fecha Límite:</label> {showDate(props.tarea.fechaLimite)}</div>
                <div><label className='label-tareas'>Usuario:</label> {nombre}</div>
                <div><label className='label-tareas'>Realizado:</label> No</div>
                <div>Confirmar: <input type="checkbox"></input></div>
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
                <button className="Eliminar"><DeleteIcon style={{cursor: "pointer"}} onClick={() => eliminarTarea()}/></button>
                <button className="ConfirmarRealizada"><CheckBoxIcon style={{cursor: "pointer"}} onClick={() => confirmarTarea()}/></button>


            </div>)
    }
}

export default TareaNoRealizada;
