import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CargandoProgress from '../../../compartido/Layout/CargandoProgress';
import Cookies from 'universal-cookie';
import { isCookieSet, loginUser } from '../../../../interfaces/cookies';


// Vista: compartida (administradores y profesores)
// Componente para pedir material. Necesita obtener todos los materiales,
// aulas, alumnos, etc

export const PedirMaterial = ({setCambio}) => {
    const cookies = new Cookies();

    const [cookieSet, setCookieSet] = useState(false);

    const [cargando, setCargando] = useState(true);

    const [allMateriales, SetAllMateriales] =  useState([]);
    const [allUsuarios, SetAllUsuarios] = useState([]);
    const [allAulas, SetAllAulas] = useState([]);

    const [datosForm, setdatosForm] = useState([]);

    useEffect(() => {
        isCookieSet().then((res) => {
            setCookieSet(res);
        });
        getAllMateriales();
        getAllUsuarios();
        getAllAulas();
        setCargando(false);
    }, []);

    // Pide la lista de todos los materiales
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

    // Pide la lista de todas las aulas
    const getAllAulas = async() =>{
        try {
            const url = "http://localhost:3900/api/usuarios/lista-aulas";
            
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.aulas);
            SetAllAulas(data.aulas);
        } catch (error) {
            console.log(error);
        }
    }

    // Pide la lista de todos los usuarios
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
        setdatosForm([...datosForm, { material: "", cantidad: 0 }]);
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
    //const [idProfesor, setIdProfesor] = useState(0);
    let idProfesor = 0;
    const setIdProfesor = (valor) => idProfesor = valor;

    const confirmar = (event) => {
        event.preventDefault();
        setIdProfesor(cookies.get("loginCookie").id)
        
        let data = event.target;
        
        //peticion post con datos de formulario
        let datos = {
            usuarioAsignado: data.user.value,
            entregamateriales: {
                materiales: datosForm,
                idProfesor: idProfesor,
                aula: data.Aula.value
            },
        }

        var urlencoded = new URLSearchParams();
        urlencoded.append("usuarioAsignado", datos.usuarioAsignado.toString());
        urlencoded.append("entregamateriales[idProfesor]", datos.entregamateriales.idProfesor.toString());
        urlencoded.append("entregamateriales[aula]", datos.entregamateriales.aula);


        for(let i = 0; i < datos.entregamateriales.materiales.length; i++){
            urlencoded.append("entregamateriales[materiales]["+i+"][material]", datos.entregamateriales.materiales[i].material.toString());
            urlencoded.append("entregamateriales[materiales]["+i+"][cantidad]", datos.entregamateriales.materiales[i].cantidad.toString());
        }

        var requestOptions = {
            method: 'POST',
            body: urlencoded,
            redirect: 'follow'
        };

         const url = "http://localhost:3900/api/tareas/crear-tareaMaterial";

         fetch(url, requestOptions)
         .then(data => {
            if(data.status === "success"){
                setCambio(2);
            }
        })
         .catch(err => console.log(err));
         window.location.reload();
        
         //setCambio(0);
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
                                <select className = "cajaMaterial" id="material" name="material" onChange={e => cambioForm(index, e)}>
                                    <option value="err"   hidden></option>
                                    {allMateriales.map(u => { return (
                                        <option key={u._id}  value={u._id} selected={item.material === u._id}>{u.nombre}</option>
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
                    <p> 
                        <label className='etiq' htmlFor="user">Aula</label> 
                        <select className="cajaAula" id="aula" name="Aula">
                            {allAulas.map(u => { return (
                                <option key={u.id} value={u.clase}>{u.clase}</option>
                            )})}
                        </select>
                    </p>

                <article>
                    <button className = "boton-anadir" type="button"  style={{cursor: "pointer"}} onClick={(fAñadir)}>Añadir</button>
                </article>  
                    <input className="boton-confirmar" type="submit"  style={{cursor: "pointer"}} value="Confirmar"/>
                </form>


            </section>
        )
    }
}
