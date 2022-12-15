import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom"
import '../styles.css'
import Header from '../../compartido/Layout/Header';
import CargandoProgress from '../../compartido/Layout/CargandoProgress';
import { FlechasPaginacionGenerico } from '../../flechasPaginacionGenerico';

import {getImage} from '../../../interfaces/arasaac'
import imagenesARASAAC from "../../../img/imagenesARASAAC.json";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { isCookieSet } from '../../../interfaces/cookies';
import Cookies from 'universal-cookie';

export const EntregaMaterial = () => {
    const cookies = new Cookies();
    const { id } = useParams();
    const [materiales, setMateriales] = useState([]);
    const [currentMaterial, setcurrentMaterial] = useState(0)//indice de la estructura de tareas
    const [cargando, setCargando] = useState(true);
    const [Profe , setProfe] = useState({});
    const [cogerNombres , setcogerNombres] = useState(0);
    const [isSet, setIsSet] = useState(false);
    const [aula, setAula] = useState(null);

    const materialesIncrement = 1;
    let nav = useNavigate();

    const rellenarMateriales = async () => {
        let url = 'http://localhost:3900/api/tareas/get-tarea/' + id;
        try {
            let res = await fetch(url);
            let data = await res.json();
            setMateriales(data.tarea.entregamateriales.materiales);
            setAula(data.tarea.entregamateriales.aula);

            await rellenaProfe(data.tarea.entregamateriales.idProfesor);
            
            setcogerNombres(1);
        }
        catch (error) {
            console.log(error);
            console.log("Error al rellenar materiales");
        }

    };

    const rellenaProfe = async (id) => {
        let url = 'http://localhost:3900/api/usuarios/get-usuario/' + id;
        try {
            let res = await fetch(url);
            let data = await res.json();
            setProfe(data.usuario);
        }
        catch (error) {
            console.log(error);
            console.log("Error al rellenar profe");
        }
    };
    

    const rellenaNombreMats = async () => {
        let url = 'http://localhost:3900/api/materials/lista-material';
        try {
            let res = await fetch(url);
            let data = await res.json();
           
            materiales.map((m,i) => {
                data.materials.map((mat) => {
                    if(m.material === mat._id){
                        materiales[i].nombre = mat.nombre;
                    }
                    
                });
            });
        }
        catch (error) {
            console.log(error);
            console.log("Error al rellenar nombre");
        }
        setCargando(false);
    };

    const recogidoMat = () => {
        let nuevosDatos = [...materiales];
        nuevosDatos.splice(currentMaterial, 1);
        setMateriales(nuevosDatos);
        if (currentMaterial > 0) {
            setcurrentMaterial(currentMaterial - 1);
        }

    };
    const tareaCompletada = () => {
        let url = 'http://localhost:3900/api/tareas/completar-tarea-alumno/' + id;
        try {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "estado": "completada"
                })
            });
        }
        catch (error) {
            console.log(error);
            console.log("Error al completar tarea");
        }
        setTimeout(() => {
            nav("/Agenda");
          }, 100);
        
    };

    useEffect(() => {
        isCookieSet().then((res) => {
            setIsSet(res);

            rellenarMateriales();
        })
    }, []);

    useEffect(() => {
        if(cogerNombres === 1){
            rellenaNombreMats();
            
        }
    }, [cogerNombres]);


    useEffect(() => {
        console.log(aula);
    }, [aula]);

    if(cargando){
        return(
            <CargandoProgress/>
        )
    }
    else if(cookies.get("loginCookie") !== undefined && isSet){
        if(materiales.length > 0){
            return (
                <>
                 <Header titulo="Materiales" alumnos="si" url_anterior="/Agenda" />
                 <section className='pictogramasDireccionEntrega'>
                    <figure id='pictogramaEntregarEn'>
                        <img className="imgPictoEntrega" src={"https://api.arasaac.org/api/pictograms/31758"} alt={"voy a"} />
                        <p>VOY A</p>
                    </figure>
                    <figure id='fotoProfeEntregaMaterial'>
                        <img className="imgPictoEntrega" src={"http://localhost:3900/api/usuarios/get-foto/"+ Profe._id} alt={"Clase de " + Profe.nombre} />
                        <p>{"Aula " + aula}</p>
                    </figure>
                 </section>


                 <FlechasPaginacionGenerico currentIndex={currentMaterial} setCurrentIndex={setcurrentMaterial} length={materiales.length} increment={materialesIncrement} />

                 <section className='pictogramasMaterialesEntregar'>
                    <figure id='cantidadMaterialEntregar'>
                        <img className="imgPictoEntrega" src={getImage(imagenesARASAAC['numeros'][materiales[currentMaterial].cantidad])} alt={"Material " + materiales[currentMaterial].idMaterial} />
                        
                    </figure>
                    <figure id='fotoMaterialEntregar'>
                        {}
                        <img className="imgPictoEntrega" src={"http://localhost:3900/api/materials/obtenerfoto/"+ materiales[currentMaterial].material} alt={"XD"} />
                        <p>{materiales[currentMaterial].nombre.toUpperCase()}</p>
                    </figure>
                 </section>

                 <section className='botonesRecogidaMaterial'>
                    <Button className='aceptarMaterial' variant="contained" onClick={e => recogidoMat()}>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/768px-Flat_tick_icon.svg.png' />
                    </Button>
                    <Button className='rechazarMaterial' variant="contained" onClick={e => recogidoMat()}>
                        <img src=' https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Red_x.svg/1024px-Red_x.svg.png' />
                    </Button>
                   
                 </section>

                </>
            )
        }
        else{
            return(
                <>
                    <Header titulo="Materiales" alumnos="si" url_anterior="/Agenda" />
                    <main className='EnviarDatosRecogida'>
                        <section className='botonEnvairRecogida'>
                            <Button variant="contained" onClick={e => tareaCompletada()} >
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Send-email.svg/750px-Send-email.svg.png' alt='Material ya recogido' />

                            </Button>
                            <p>ENVIAR</p> 
                        </section>
                    </main>
                </>
            )
        }
    }
  
}
