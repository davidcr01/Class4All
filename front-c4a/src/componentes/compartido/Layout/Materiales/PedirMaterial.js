import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CargandoProgress from '../../../compartido/Layout/CargandoProgress';

// Vista: compartida (administradores y profesores)

const PedirMateriales = () => {

//    const [usuarios, setUsuarios] = React.useState([{}]);
//    const [materiales, setMateriales] = React.useState([{}]);
  
    const [cargando, setCargando] = useState(true);

    const [allMateriales, SetAllMateriales] =  useState([]);
    const [allUsuarios, SetAllUsuarios] = useState([]);
/*
    useEffect(() => {
        setCargando(true);
        getUser();
        getMaterial();
    }, []);
*/
    useEffect(() => {
        setCargando(true);
        getAllMateriales();
        getAllUsuarios();
    }, []);

    const getAllMateriales = async() =>{
        try {
            const url = "http://localhost:3900/api/materials/lista-material";

            const res = await fetch(url)
            const data = await res.json();
            SetMateriales(data.AllMateriales);
        } catch (error) {
            console.log(error);
        }
    }

    const getAllUsuarios = async() =>{
        try {
            const url = "http://localhost:3900/api/usuarios/lista-usuarios";

            const res = await fetch(url)
            const data = await res.json();
            SetUsuarios(data.AllUsuarios);
        } catch (error) {
            console.log(error);
        }
    }

    const asignarUsuario = (event) => {
        event.preventDefault();

        //get value from select
        const idUsuario = document.getElementById("user").value;
        
        const url = "http://localhost:3900/api/materiales/pedir-materiales/" + idUsuario;

        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: urlencoded            
        }

        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    const pedirMaterial = (event) => {
        
        event.preventDefault();

        let formulario = event.target;
       
        let nuevoMaterial = {
            material: formulario.material.value,
            cantidad: formulario.material.value,
        }

        var urlencoded = new URLSearchParams();
        urlencoded.append("material", nuevoMaterial.material);
        urlencoded.append("cantidad", nuevoMaterial.cantidad);

        var requestOptions = {
            method: 'POST',
            body: urlencoded,
            redirect: 'follow'         
        }

        const url = "http://localhost:3900/api/materiales/pedir-materiales/";

        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    //profesor, alumno, tipo (entregamaterial), descripcion, tipo de instrucciones, vector de materialess
/*
    const getUser = async () => {
        try {
            setUsuarios(props.usuarios);
            setCargando(false);

        } catch (error) {
            console.log(error);

        }
    }

    const getMaterial = async () => {
        try{
            setMateriales(props.materiales);
            setCargando(false);
        } catch (error) {
            console.log(error);
        }
    }
*/
    const cancelarMaterial = (event) => {
        event.preventDefault();


    }

    if (cargando) {
        return <CargandoProgress/>
    } else {
        return (
            <section className = "peticion">
                <form onSubmit={confirmar}>
                    
                    <p> 
                        <label className='etiq' htmlFor="user">Alumno</label> 
                        <select id="user" name="Alumno">
                            {usuarios.map(u => { return (
                                <option value={u._id}>{u.nombre}</option>
                            )})}
                        </select>
                    </p>

                    <article>
                        <p> 
                            <label className='etiq' htmlFor="material">Material</label> 
                            <select id="material" name="Material">
                                {materiales.map(u => { return (
                                    <option value={u._id}>{u.nombre}</option>
                                )})}
                            </select>
                        </p>
                        <p>
                            <label className="etiq" htmlFor="cantidad">Cantidad</label>
                            <input type="text" id="cantidad"/>
                        </p>
                    </article>

                    <button className="botonAñadir" onClick={() => nav("/añadir-material")}>Añadir</button>

                    <input type="submit" value="Confirmar"/>
                </form>
            </section>
        )
    }
}

export default PedirMaterial;
    
