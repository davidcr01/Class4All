import React, { useEffect, useState } from 'react';
import TareaSinAsignar from './TareaSinAsignar';
import TareaAsignada from './TareaAsignada';
import TareaRealizada from './TareaRealizada';
import TareaNoRealizada from './TareaNoRealizada';

export const Tareas = () => {
    const [tareas,SetTareas] =  useState([]); 

    const conseguirTareas = async() =>{
        try {
            const url = "http://localhost:3900/api/tareas/lista-tareasDia";
            
            const res = await fetch(url)
            const data = await res.json();
            SetTareas(data.tareas);
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        conseguirTareas();
    }, []);

  return (
    <div>
        {tareas != null && tareas.length !== 0 ?
        tareas.map(t =>{
            return(
                <>
                {t.estado === 'sinasignar' && (
                    <TareaSinAsignar key={t._id} className="tarea" tarea={t} />
                )}
                {t.estado === 'asignada' && (
                    <TareaAsignada key={t._id} className="tarea" tarea={t} />
                )}
                {t.estado === 'realizada' && (
                    <TareaRealizada key={t._id} className="tarea" tarea={t} />
                )}
                {t.estado === 'norealizada' && (
                    <TareaNoRealizada key={t._id} className="tarea" tarea={t} />
                )}
                </>
               
            );
        })
        : <h2>Cargando</h2>
        
        }
        

    </div>
    
  )
}


export default Tareas;