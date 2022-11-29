import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom"
import '../styles.css'
import Header from '../../compartido/Layout/Header';
import CargandoProgress from '../../compartido/Layout/CargandoProgress';
import { FlechasPaginacionGenerico } from '../../flechasPaginacionGenerico';

import {getImage} from '../../../interfaces/arasaac'
import imagenesARASAAC from "../../../img/imagenesARASAAC.json";
import Button from '@mui/material/Button';

export const EntregaMaterial = () => {

    const { id } = useParams();
    const [materiales, setMateriales] = useState([]);
    const [currentMaterial, setcurrentMaterial] = useState(0)//indice de la estructura de tareas
    const [cargando, setCargando] = useState(true);
    const [Profe , setProfe] = useState({});

    const materialesIncrement = 1;

    const rellenarMateriales = async () => {
        let url = 'http://localhost:3900/api/tareas/get-tarea/' + id;
        try {
            let res = await fetch(url);
            let data = await res.json();
            setMateriales(data.tarea.entregamateriales.materiales);
            await rellenaProfe(data.tarea.entregamateriales.idProfesor);
            setCargando(false);
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

    const recogidoMat = () => {
        let nuevosDatos = [...materiales];
        nuevosDatos.splice(currentMaterial, 1);
        setMateriales(nuevosDatos);
        if (currentMaterial > 0) {
            setcurrentMaterial(currentMaterial - 1);
        }

    };

    useEffect(() => {
        rellenarMateriales();
    }, []);

    if(cargando){
        return(
            <CargandoProgress/>
        )
    }
    else{
        if(materiales.length > 0){
            return (
                <>
                 <Header titulo="Materiales" alumnos="si"/><div className='PaginaAgenda'></div>
                 <section className='pictogramasDireccionEntrega'>
                    <figure>
                        <img src={"https://api.arasaac.org/api/pictograms/31758"} alt={"voy a"} />
                    </figure>
                    <figure>
                        <img src={"http://localhost:3900/api/usuarios/get-foto/"+ Profe._id} alt={"Clase de " + Profe.nombre} />
                    </figure>
                 </section>


                 <FlechasPaginacionGenerico currentIndex={currentMaterial} setCurrentIndex={setcurrentMaterial} length={materiales.length} increment={materialesIncrement} />

                 <section>
                    <figure>
                        <img src={getImage(imagenesARASAAC['numeros'][materiales[currentMaterial].cantidad])} alt={"Material " + materiales[currentMaterial].idMaterial} />
                    </figure>
                    <figure>
                        <img src={"http://localhost:3900/api/materials/obtenerfoto/"+ materiales[currentMaterial].material} alt={"XD"} />
                    </figure>
                 </section>

                 <section>
                    <Button variant="contained" onClick={e => recogidoMat()}>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/768px-Flat_tick_icon.svg.png' />
                    </Button>
                 </section>

                </>
            )
        }
        else{
            return(
                <>
                <Button variant="contained">
                        Enviar 
                    </Button>
                </>
            )
        }
    }
  
}
