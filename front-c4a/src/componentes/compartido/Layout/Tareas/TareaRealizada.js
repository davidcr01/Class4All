import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Button } from '@mui/material';
import CargandoProgress from '../../../compartido/Layout/CargandoProgress';
import RadioGroupRating from './CaritasRating';
import { showDate } from '../../../../interfaces/dates';

// Vista: compartida (admins y profs)
// Idem que TareaAsginada pero para Realizada


const TareaRealizada = (props) => {
    
    const [valor, setValor] = useState(3);  //Para las caritas
    const [nombre, setNombre] = useState('');
    const [cargando, setCargando] = useState(true);
    const [datosForm, setdatosForm] = useState([]);

    useEffect(() => {
        setCargando(true);
        getUser();
    }, []);

    const eliminarTarea = () => {
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
    const confirmarTarea = (event) => {
        event.preventDefault();
        
        const url = "http://localhost:3900/api/tareas/completar-tarea-profesor/" + props.tarea._id;

        fetch(url, {method: 'PUT'})
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err));
    }

    const enviarRetroalimentacion = (event) => {
        event.preventDefault();
        let datos = document;
        //console.log(datos.getElementById("retroalimentacion-"+ props.tarea._id).value);
        let retroalimentacionTexto = datos.getElementById("retroalimentacion-" + props.tarea._id).value;
        let retroalimentacionNumero = valor;
        //console.log(retroalimentacionNumero);

        const url = "http://localhost:3900/api/tareas/add-retroalimentacion/" + props.tarea._id;

        fetch(url, {method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: 
                JSON.stringify({retroalimentacionTexto, retroalimentacionNumero})
        }).then(res => res.json)
        .catch(err => console.log(err));
    }

    const confirmaciones = (event) => {
        enviarRetroalimentacion(event);
        confirmarTarea(event);
        window.location.reload();  
        //console.log(props.tarea.retroalimentacionTexto);
    }
  
    //PARA QUE NO SE BORRE LA PALABRA RETROALIMENTACIÓN
    const funcRetroText = (e) => {
        let datos = e.target;
        if (datos.value.length < "Retroalimentación: ".length){
            datos.value = "Retroalimentación: ";
        }
    }

    const textoRetro = () => {
        if (props.tarea.retroalimentacionTexto === null){
            return "Retroalimentación: ";
        } else return props.tarea.retroalimentacionTexto;
    }

    if (cargando) {
        return <CargandoProgress/>
    } else {
        return (
            //CAMBIADO PARA QUE EN VEZ DE LOS BOTONES DE BIEN/MAL APAREZCAN CARITAS
            //Siguiente Commit CAMBIADO BOTÓN DE CONFIRMAR (antes era un checkbox)
            //Cambiada la retroalimentación para que no se borre
            <div className="tarea">
                <div><label className='label-tareas'>Tarea:</label> {props.tarea.nombre}</div>
                <div><label className='label-tareas'>Fecha Asignada:</label> {showDate(props.tarea.fechaAsignada)}</div>
                <div><label className='label-tareas'>Fecha Finalización:</label> {showDate(props.tarea.fechaAcabada)}</div>
                <div><label className='label-tareas'>Usuario:</label> {nombre}</div>
                <div><label className='label-tareas'>Realizado:</label> Si</div>
                {/**
                <div><label className='label-tareas'>Confirmar:</label> <input type="checkbox"></input></div>
                <div className="botonesTareasReal">
                    <Button variant='contained' color='success'>BIEN</Button>
                    <Button variant='contained' style={{backgroundColor: "orange",}}>TARDE</Button>
                    <Button variant='contained' color='error' >MAL</Button>
                </div>
                **/}
                <form>
                    <p>
                        <RadioGroupRating valor={props.tarea.retroalimentacionNumero} setValor={setValor}/>
                    </p>
                    <p>
                        <textarea className="recuadroRetro" id={"retroalimentacion-"+props.tarea._id} name='retro' onChange={e => funcRetroText(e)}>{textoRetro() }</textarea>
                    </p>
                </form>
                <button className="Eliminar"><DeleteIcon style={{cursor: "pointer"}} onClick={() => eliminarTarea()}/></button>
                <button className="ConfirmarRealizada"><CheckBoxIcon style={{cursor: "pointer"}} onClick={e => confirmaciones(e)}/></button>
            </div>)
    }


}

export default TareaRealizada;