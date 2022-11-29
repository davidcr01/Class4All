
/**
 * Obtiene las aulas restantes para una tarea dada.
 * @pre La tarea debe ser del tipo comanda.
 * @param idTarea Identificador de la tarea.
 * @returns Array vacío en caso de no poder obtener aulas restantes. En otro caso el array con las aulas que quedan.
 */
export const getAulasRestantes = async (idTarea) => {
    try {
        const url = "http://localhost:3900/api/tareas/aulas-restantes-comanda/"+idTarea;
        const res = await fetch(url);
        const data = await res.json();

        if(data.status === "error")
            return [];
        else
            return data.aulasRestantes;
    } catch (error) {
        console.log(error);
    }
}

/**
 * Elimina una aula de las aulas pendientes que tiene un alumno para las comandas.
 * @pre La tarea debe ser del tipo comanda.
 * @param idTarea Identificador de la tarea
 * @param aula Aula que se desea marcar como completada
 * @returns true en caso de haberse llevado con exito el cambio. false en caso de no haberse llevado con exito.
 * 
 * @note Cabe destacar que esta operacion permite la eliminacion del aula multiple, es decir, si se tienen estas aulas
 * [3A, 2B] y se mandan dos veces eliminar 3A, el resultado sigue siendo [2B].
 */
export const setAulaCompletada = async (idTarea, aula) => {
    try {
        const url = "http://localhost:3900/api/tareas/completar-clase-comanda";
        //console.log(url);
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({idTarea: idTarea, aula: aula})
        });

        const data = await res.json();

        return (data.status === "success")? true : false;
    } catch (error) {
        console.log(error);

    }      
}