import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CargandoProgress from '../../../compartido/Layout/CargandoProgress';
import { ListItem } from '@mui/material';

// Vista: compartida (administradores y profesores)

const MaterialPedido = ({profesorID, alumno, materiales, tareaID,setCambio}) => {

    const [cargando, setCargando] = useState(true);

    const [listaMateriales, SetListaMateriales] = useState([]);
    const [alumnoNombre, SetAlumno] = useState([]);
    const [tarea, setTarea] = useState([]);

    useEffect(() => {
        getListaMateriales();
        getAlumno();
        setCargando(false);
        getTarea();
    }, []);

    const getListaMateriales = async () => {
        try {
            const url = "http://localhost:3900/api/materials/lista-material";

            const res = await fetch(url)
            const data = await res.json();
            SetListaMateriales(data.materials);
        } catch (error) {
            console.log(error);
        }
    }

    const getAlumno = async() => {
        try {
            const url = "http://localhost:3900/api/usuarios/get-usuario/" + alumno;

            const res = await fetch(url)
            const data = await res.json();
            SetAlumno(data.usuario);
        } catch (error) {
            console.log(error);
        }
    }

    const getTarea = async() => {
        try {
            const url = "http://localhost:3900/api/tareas/get-tarea/" + tareaID;

            const res = await fetch(url)
            const data = await res.json();
            setTarea(data.tarea);
        } catch (error) {
            console.log(error);
        }
    }


    const fRecibido = async() => {
        const url = "http://localhost:3900/api/tareas/completar-tarea-profesor/" + tareaID;
        //hacer fetch a la url con put
        fetch(url, {method: 'PUT'})
            .then(res => res.json())
            .then(data => {
                if(data.status === "success"){
                    setCambio(1);
                }
            })
            .catch(error => console.log(error));

        
    }
    
    const eliminarMateriales = async() => {
        //marcar como cancelada
        const url = "http://localhost:3900/api/tareas/cancelar-tarea/" + tareaID;
        //hacer fetch a la url con put
        fetch(url, {method: 'PUT'})
            .then(res => res.json())
            .then(data => {
                if(data.status === "success"){
                    setCambio(1);
                }
            })
            .catch(error => console.log(error));
    }
    
    if (cargando) {
        return <CargandoProgress/>
    } else {
        const pedidos = materiales.map(mat => 
            listaMateriales.map((t,key) => {
                if (mat.material === t._id) { return(
                    <ListItem key={mat._id}>
                        <article className="materialRecibido">
                            <p>
                                <label className='negrita'>Material:</label> 
                                <label>{t.nombre}</label>
                            </p>
                            <p>
                                <label className='negrita'>Cantidad:</label> 
                                <label>{mat.cantidad}</label>
                            </p>
                        </article>
                    </ListItem>
                )}
            }
            )
        );
        return (
            <section className="peticion">
                
                <p>
                    <label className='negrita'>Alumno:</label> 
                    <label>{alumnoNombre.nombre}</label>
                </p>
                {pedidos}  
                <p>
                    <label className='negrita'>Realizado:</label> 
                    <label>{tarea.realizada ? "SI" : "NO"}</label>
                </p>

                <button className = "boton-anadir"><CheckBoxIcon style={{cursor: "pointer"}} onClick={() => fRecibido()}/>Recibido</button>
                <button className="boton-eliminar"><DeleteIcon style={{cursor: "pointer"}} onClick={() => eliminarMateriales()}/>Cancelar</button>

            </section>
        )
        }



}

export default MaterialPedido;


