import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CargandoProgress from '../../../compartido/Layout/CargandoProgress';

// Vista: compartida (administradores y profesores)

export const PedirMaterial = () => {
  
    const [cargando, setCargando] = useState(true);

    const [allMateriales, SetAllMateriales] =  useState([]);
    const [allUsuarios, SetAllUsuarios] = useState([]);

    const [datosForm, setdatosForm] = useState([/* { idMat: "", catidad: 0} */]);

    useEffect(() => {
        
        getAllMateriales();
        getAllUsuarios();
        setCargando(false);
    }, []);

    const getAllMateriales = async() =>{
        try {
            const url = "http://localhost:3900/api/materials/lista-material";

            const res = await fetch(url)
            const data = await res.json();
            SetAllMateriales(data.materials);
        } catch (error) {
            console.log(error);
        }
    }

    const getAllUsuarios = async() =>{
        try {
            const url = "http://localhost:3900/api/usuarios/lista-usuarios";

            const res = await fetch(url)
            const data = await res.json();
            SetAllUsuarios(data.usuarios);
        } catch (error) {
            console.log(error);
        }
    }


    const cambioForm = (i,e) => {
        let nuevosDatos = [...datosForm];
        nuevosDatos[i][e.target.name] = e.target.value;
        setdatosForm(nuevosDatos);
    }

    const fAñadir = () => {
        setdatosForm([...datosForm, { idMat: "", cantidad: 0 }]);
    }

    const cancelar = (i) => {
        let nuevosDatos = [...datosForm];
        nuevosDatos.splice(i, 1);
        setdatosForm(nuevosDatos);
    }

    const style = {
        backgroundColor: "#f5f5f5",
        margin: "10px",
    }


/*
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
    */

    const confirmar = (event) => {
        
        event.preventDefault();

        /* let formulario = event.target;
       
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
            .catch(error => console.log('error', error)); */
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
                            {allUsuarios.map(u => { return (
                                <option key={u._id} value={u._id}>{u.nombre}</option>
                            )})}
                        </select>
                    </p>
                    {datosForm.map((item, index) => { return (
                        <article key={index} style={style}>
                            <p> 
                                <label className='etiq' htmlFor="material">Material</label> 
                                <select id="material" name="idMat" onChange={e => cambioForm(index, e)}>
                                    <option value="err"   hidden></option>
                                    {allMateriales.map(u => { return (
                                        <option key={u._id}  value={u._id} selected={item.idMat === u._id}>{u.nombre}</option>
                                    )})}
                                </select>
                            </p>
                            
                            <p>
                                <label className="etiq" htmlFor="cantidad">Cantidad</label>
                                <input type="text" id="cantidad" name='cantidad' value={item.cantidad ||""} onChange={e => cambioForm(index, e)}/>
                            </p>
                            <button onClick={() => cancelar(index)}>Cancelar</button>
                        </article>
                    )})}                                    
                    
                    <input type="submit" value="Confirmar"/>
                </form>

                <article>
                    <button onClick={(fAñadir)}>Añadir</button>
                </article>
            </section>
        )
    }
}


    

