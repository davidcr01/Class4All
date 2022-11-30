import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CargandoProgress from '../../../compartido/Layout/CargandoProgress';
import Cookies from 'universal-cookie';
import { isCookieSet, loginUser } from '../../../../interfaces/cookies';
import { ContextoRol } from '../../../../contexto/Roles';


// Vista: compartida (administradores y profesores)

export const PedirMaterial = () => {
    const cookies = new Cookies();

    const [cookieSet, setCookieSet] = useState(false);

    const [cargando, setCargando] = useState(true);
    const { setCookie } = React.useContext(ContextoRol);

    const [allMateriales, SetAllMateriales] =  useState([]);
    const [allUsuarios, SetAllUsuarios] = useState([]);

    const [datosForm, setdatosForm] = useState([/* { idMat: "", catidad: 0} */]);

    useEffect(() => {
        isCookieSet().then((res) => {
            setCookieSet(res);
        });
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
            const url = "http://localhost:3900/api/usuarios/get-alumnos";

            const res = await fetch(url)
            const data = await res.json();
            SetAllUsuarios(data.alumnos);
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

    //Para obtener valor variables
    const [usuarioAsignado, setUsuarioAsignado] = useState(0);
    const [idProfesor, setIdProfesor] = useState(0);
    const [materiales, setMateriales] = useState([]);

    const confirmar = (event) => {
        setIdProfesor(cookies.get("loginCookie").id)
        console.log(idProfesor);
    //     event.preventDefault();
    //     //peticion post con datos de formulario
    //     let datosForm = {
    //         idUsuario: event.target.idUsuario.value,
    //         materiales: datosForm
    //     }
        

    //     const url = "http://localhost:3900/api/materials/crear-tareaMaterial";

    //     fetch(url, {
    //         method: 'POST',
    //         body: JSON.stringify(datosForm),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(err => console.log(err));
    // }


        


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
    }else if (cookies.get("loginCookie") && cookieSet) {
        return (
            <section className = "peticion">
                <form onSubmit={confirmar}>
                    
                    <p> 
                        <label className='etiq' htmlFor="user">Alumno</label> 
                        <select className="cajaMaterial" id="user" name="Alumno">
                            {allUsuarios.map(u => { return (
                                <option key={u._id} value={u._id}>{u.nombre}</option>
                            )})}
                        </select>
                    </p>
                    {datosForm.map((item, index) => { return (
                        <article key={index} style={style}>
                            <p> 
                                <label className='etiq' htmlFor="material">Material</label> 
                                <select className = "cajaMaterial" id="material" name="idMat" onChange={e => cambioForm(index, e)}>
                                    <option value="err"   hidden></option>
                                    {allMateriales.map(u => { return (
                                        <option key={u._id}  value={u._id} selected={item.idMat === u._id}>{u.nombre}</option>
                                    )})}
                                </select>
                            </p>
                            
                            <p>
                                <label className="etiq" htmlFor="cantidad">Cantidad</label>
                                <input className = "cajaCantidad" type="text" id="cantidad" name='cantidad' value={item.cantidad ||""} onChange={e => cambioForm(index, e)}/>
                            </p>
                            <button className = "boton-cancelar" onClick={() => cancelar(index)}>Cancelar</button>
                        </article>
                    )})}                                    
                <article>
                    <button className = "boton-anadir" onClick={(fAñadir)}>Añadir</button>
                </article>  
                    <input className="boton-confirmar" type="submit" value="Confirmar"/>
                </form>


            </section>
        )
    }
}


    

