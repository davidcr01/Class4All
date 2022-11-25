import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom"
import '../styles.css'
import Header from '../../compartido/Layout/Header';
import CargandoProgress from '../../compartido/Layout/CargandoProgress';
import { FlechasPaginacionGenerico } from '../../flechasPaginacionGenerico';

export const EntregaMaterial = () => {

    const { id } = useParams();
    const [materiales, setMateriales] = useState([]);
    const [currentMaterial, setcurrentMaterial] = useState(0)//indice de la estructura de tareas
    const [cargando, setCargando] = useState(true);

    const materialesIncrement = 1;

    const rellenarMateriales = async () => {
        let url = 'http://localhost:3900/api/tareas/get-tarea/' + id;
        try {
            let res = await fetch(url);
            let data = await res.json();
            setMateriales(data.tarea.entregamateriales.materiales);
            setCargando(false);
        }
        catch (error) {
            console.log(error);
            console.log("Error al rellenar materiales");
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
        return (
            <>
             <Header titulo="Materiales" /><div className='PaginaAgenda'></div>
             <section>
                <h2>Pictogramas</h2>
             </section>


             <FlechasPaginacionGenerico currentIndex={currentMaterial} setCurrentIndex={setcurrentMaterial} length={materiales.length} increment={materialesIncrement} />

             <section>
                <h2>materiales</h2>
             </section>

             <section>
                <h2>aceptar/ rechazar</h2>
             </section>
            
            </>
          )
    }
  
}
