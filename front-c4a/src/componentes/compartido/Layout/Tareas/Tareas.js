import React, { useEffect, useState } from 'react';
import TareaSinAsignar from './TareaSinAsignar';
import TareaAsignada from './TareaAsignada';
import TareaRealizada from './TareaRealizada';
import TareaNoRealizada from './TareaNoRealizada';
import CargandoProgress from '../../../compartido/Layout/CargandoProgress';

// Vista: compartida (admins y profs)
// Componente para mostrar el menú de las tareas

export const Tareas = (props) => {
    const [tareas,setTareas] =  useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [needsRender, setNeedsRender] = useState(false);
    const conseguirTareas = async() =>{
        try {
            const url = "http://localhost:3900/api/tareas/lista-tareasDia";

            const res = await fetch(url)
            const data = await res.json();
            setTareas(data.tareas);
        } catch (error) {
            console.log(error);
        }
    }

    // Obtiene todos los usuarios
    const conseguirUsuarios = async() =>{
        try {
            const url = "http://localhost:3900/api/usuarios/lista-usuarios";

            const res = await fetch(url)
            const data = await res.json();
            setUsuarios(data.usuarios);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        conseguirTareas();
        conseguirUsuarios();
    }, [needsRender]);

// Devuele las categorías de las tareas
  return (
    <div>
        {tareas != null && tareas.length !== 0 ?
        tareas.map(t =>{
            return(
                <>
                {t.estado === props.tipo && t.estado === "sinAsignar" && (
                    <TareaSinAsignar key={t._id} className="tarea" usuarios={usuarios} tarea={t} />
                )}
                {t.estado === props.tipo && t.estado === 'asignada' && (
                    <TareaAsignada key={t._id} className="tarea" tarea={t} setNeedsRender={setNeedsRender} needsRender={needsRender} />
                )}
                {t.estado === props.tipo && t.estado === 'completada' && (
                    <TareaRealizada key={t._id} className="tarea" tarea={t} />
                )}
                {t.estado === props.tipo && t.estado === 'cancelada' && (
                    <TareaNoRealizada key={t._id} className="tarea" tarea={t} />
                )}
                </>
            );
        })
        : <CargandoProgress/>
        }
    </div>

  )

}

export default Tareas;