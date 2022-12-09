import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CargandoProgress from '../../../compartido/Layout/CargandoProgress';
import RadioGroupRating from './CaritasRating';

// Vista: compartida (admins y profs)

const TareaRealizada = (props) => {
    
    const [valor, setValor] = useState(3);
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

    //CREADO NUEVO PARA MANDAR LA CONFIRMACIÓN Y LA RETROALIMENTACIÓN ETC
    //FALTA arreglar para que funcione de vd y además de confirmar que se ha realizado, se mande la retroalimentación
    const confirmarTarea = (event) => {
        event.preventDefault();
        //let datos = event.target;
        let datos = document;
        //cuando subamos una foto del menu poner tambn un campo de texto para el texto alternativo tanto en la interfaz como en la base de datos
        let ret = datos.getElementById("retroalimentacion").value;
        let car = valor;

        console.log(car);


        /*const url = "http://localhost:3900/api/tareas/completar-tarea-profesor/" + props.tarea._id;

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
            .catch(err => console.log(err));*/
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

    //PARA QUE NO SE BORRE LA PALABRA RETROALIMENTACIÓN
    const funcRetroText = (e) => {
        let datos = e.target;
        if (datos.value.length < "Retroalimentación: ".length){
            datos.value = "Retroalimentación: ";
        }
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
                <div><label className='label-tareas'>Fecha:</label> {props.tarea.fecha}</div>
                <div><label className='label-tareas'>Usuario:</label> {nombre}</div>
                <div><label className='label-tareas'>Realizado:</label> Si</div>
                <form>
                    <p>
                        <RadioGroupRating valor={valor} setValor={setValor}/>
                    </p>
                    <p>
                        <textarea className="recuadroRetro" id="retroalimentacion" name='retro' onChange={e => funcRetroText(e)}>Retroalimentación: </textarea>
                    </p>
                </form>
                <button className="Eliminar"><DeleteIcon style={{cursor: "pointer"}} onClick={() => eliminarTarea()}/></button>
                <button className="ConfirmarRealizada"><CheckBoxIcon style={{cursor: "pointer"}} onClick={e => confirmarTarea(e)}/></button>


            </div>)
    }


}

export default TareaRealizada;