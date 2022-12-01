import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CargandoProgress from '../../../compartido/Layout/CargandoProgress';
import { ListItem } from '@mui/material';

// Vista: compartida (administradores y profesores)

const MaterialPedido = ({profesorID, alumno, materiales, tareaID}) => {

    const [cargando, setCargando] = useState(true);

    const [listaMateriales, SetListaMateriales] = useState([]);
    const [alumnoNombre, SetAlumno] = useState([]);

    useEffect(() => {
        getListaMateriales();
        getAlumno();
        setCargando(false);
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

    const getAlumno = async() =>{
        try {
            const url = "http://localhost:3900/api/usuarios/get-usuario/" + alumno;

            const res = await fetch(url)
            const data = await res.json();
            SetAlumno(data.usuario);
        } catch (error) {
            console.log(error);
        }
    }


    const fRecibido = () => {
        alert("todo guay");
        /*const url = "http://localhost:3900/api/tareas/completar-tarea-profesor/" + profesorID;

        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({idTarea: tareaID})           
        }
        fetch(url, requestOptions)
            .then(res => res.json())
            .then(data => {
                if(data.status === "success"){
                    props.setNeedsRender(!props.needsRender);//AQUI SERGIO :)
                }
            })
            .catch(error => alert(error));*/
    }
    
    const eliminarMateriales = () => {
        //marcar como cancelada
        const url = "http://localhost:3900/api/materiales/eliminar-peticion/" + profesorID;

        var requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()           
        }

        fetch(url, requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                window.location.reload();
            })
            .catch(err => console.log(err));
    }


    const realizadaState = "No";
    if (tareaID.realizada) {
        realizadaState = "Sí";
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
                    <label>{realizadaState}</label>
                </p>

                <button className = "boton-anadir"><DeleteIcon style={{cursor: "pointer"}} onClick={() => fRecibido()}/>Recibido</button>
                <button className="boton-eliminar"><CheckBoxIcon style={{cursor: "pointer"}} onClick={() => eliminarMateriales()}/>Cancelar</button>

            </section>
        )
        }



}

export default MaterialPedido;


