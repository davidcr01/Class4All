import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CargandoProgress from '../../../compartido/Layout/CargandoProgress';
import { ListItem } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import RadioGroupRating from '../Tareas/CaritasRating';


// Vista: compartida (administradores y profesores)
// Componente para cargar distintas partes de la información del pedido

const MaterialPedido = ({profesorID, alumno, materiales, tareaID,setCambio,faltan}) => {

    const [cargando, setCargando] = useState(true);

    const [listaMateriales, SetListaMateriales] = useState([]);
    const [alumnoNombre, SetAlumno] = useState([]);
    const [tarea, setTarea] = useState([]);

    const [valor, setValor] = useState(3);  //Para las caritas

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

    const enviarRetroalimentacion = (event) => {
        event.preventDefault();
        let datos = document;
        let retroalimentacionTexto = datos.getElementById("retroalimentacion-"+tareaID).value;
        let retroalimentacionNumero = valor;

        console.log(retroalimentacionNumero);
        console.log(retroalimentacionTexto);

        const url = "http://localhost:3900/api/tareas/add-retroalimentacion/" + tareaID;

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
        fRecibido();
        //window.location.reload();  
    }

     //PARA QUE NO SE BORRE LA PALABRA RETROALIMENTACIÓN
     const funcRetroText = (e) => {
        let datos = e.target;
        if (datos.value.length < "Retroalimentación: ".length){
            datos.value = "Retroalimentación: ";
        }
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
                    <ListItem key={mat.material}>
                        <article className="materialRecibido">
                            <p>
                                <label className='negrita'>Material:</label> 
                                <label>{t.nombre}</label>
                            </p>
                            <p>
                                <label className='negrita'>Cantidad:</label> 
                                <label>{mat.cantidad}</label>
                            </p>
                            {faltan.map((f, key) => {
                                if(f.material === mat.material ){
                                    return(
                                        <section className="texto-falta-material" key={key}>
                                            <p>
                                                <WarningAmberIcon className='icono-warning' sx={{float:'left'}} fontSize="large" color="error"></WarningAmberIcon>
                                                <h4>Falta este material</h4>
                                            </p>
                                        </section>
                                    )
                                }
                                
                            })}
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

                <form>
                    <p>
                        <RadioGroupRating valor={getTarea().retroalimentacionNumero} setValor={setValor}/>
                    </p>
                    <p>
                        <textarea className="recuadroRetro" id={"retroalimentacion-"+tareaID} name='retro' onChange={e => funcRetroText(e)}>Retroalimentación: </textarea>
                        {/**<textarea className="recuadroRetro" id={"retroalimentacion-"+tareaID} name='retro' onChange={e => funcRetroText(e)}>{textoRetro()} </textarea> **/}
                    </p>
                </form>

                <button className = "boton-anadir"><CheckBoxIcon style={{cursor: "pointer"}} onClick={e => confirmaciones(e)}/>Recibido</button>
                <button className="boton-eliminar"><DeleteIcon style={{cursor: "pointer"}} onClick={eliminarMateriales}/>Cancelar</button>

            </section>
        )
        }



}

export default MaterialPedido;


