import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom"
import '../styles.css'
import Header from '../../compartido/Layout/Header';
import CargandoProgress from '../../compartido/Layout/CargandoProgress';
import { FlechasPaginacionGenerico } from '../../flechasPaginacionGenerico';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import {getImage, getBestSearch} from '../../../interfaces/arasaac'
import imagenesARASAAC from "../../../img/imagenesARASAAC.json";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { isCookieSet } from '../../../interfaces/cookies';
import Cookies from 'universal-cookie';
import { getAulas } from '../../../interfaces/aulasRestantes';

export const EntregaMaterial = () => {
    const cookies = new Cookies();
    const { id } = useParams();
    const [materiales, setMateriales] = useState([]);
    const [currentMaterial, setcurrentMaterial] = useState(0)//indice de la estructura de tareas
    const [cargando, setCargando] = useState(true);
    const [profe , setProfe] = useState({});
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
            
            let matRef = data.tarea.entregamateriales.materiales;
            for(let i = 0; i< matRef.length; i++){
                if(matRef[i].cantidad > 10){
                    const nro = await getBestSearch(matRef[i].cantidad);
                    matRef[i].idNro = nro[0]._id;
                }
                else {
                    matRef[i].idNro = imagenesARASAAC['numeros'][matRef[i].cantidad];
                }
            }
            
            setMateriales(data.tarea.entregamateriales.materiales);
            setcogerNombres(1);

            return data.tarea.entregamateriales.idProfesor;
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

            return data.usuario;
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

            rellenarMateriales().then((idProfe) =>{
                rellenaProfe(idProfe).then((usuario) =>{
                    getAulas().then((aulas) => {
                        //console.log(aulas, usuario);
    
                        let index = -1;
                        index = aulas.find((item/*, i*/) => {
                            console.log(usuario, idProfe);
                            if(item.id === usuario._id){
                                return item;
                            }
                        })
    
                        setAula(index.clase);
                        setProfe(usuario);
                    })
                })
            });
        })
    }, []);

    useEffect(() => {
        console.log(profe);
    }, [profe])
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
        //console.log(getBestSearch(materiales[currentMaterial].cantidad).then((res) => console.log(res)));
        console.log(materiales);
        if(materiales.length > 0){
            return (
                <>
                 <Header titulo="Materiales" alumnos="si" url_anterior="/Agenda" />
                 <section className='pictogramasDireccionEntrega'>
                    <figure id='pictogramaEntregarEn'>
                        <img src={"https://api.arasaac.org/api/pictograms/31758"} alt={"voy a"} />
                        <p>VOY A</p>
                    </figure>
                    <figure id='fotoProfeEntregaMaterial'>
                        <img src={"http://localhost:3900/api/usuarios/get-foto/"+ profe._id} alt={"Clase de " + profe.nombre} />
                        <p>{"Aula " + aula}</p>
                    </figure>
                 </section>


                 <FlechasPaginacionGenerico currentIndex={currentMaterial} setCurrentIndex={setcurrentMaterial} length={materiales.length} increment={materialesIncrement} />

                 <section className='pictogramasMaterialesEntregar'>
                    <figure id='cantidadMaterialEntregar'>
                        <img src={getImage(materiales[currentMaterial].idNro)} alt={materiales[currentMaterial].cantidad} />
                        
                    </figure>
                    <figure id='fotoMaterialEntregar'>
                        {}
                        <img src={"http://localhost:3900/api/materials/obtenerfoto/"+ materiales[currentMaterial].material} alt={materiales[currentMaterial].nombre} />
                        <p>{materiales[currentMaterial].nombre.toUpperCase()}</p>
                    </figure>
                 </section>

                 <section className='botonesRecogidaMaterial'>
                    <Button color="error" className='rechazarMaterial' variant="contained" onClick={recogidoMat}>
                        <CloseIcon className='fuente-flecha'/>
                    </Button>

                    <Button className='aceptarMaterial boton-paginacion' variant="contained" onClick={recogidoMat}>
                        <DoneIcon className='fuente-flecha'/>
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
