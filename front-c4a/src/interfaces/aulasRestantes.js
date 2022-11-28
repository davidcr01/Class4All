

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