import React from 'react';
import { useNavigate } from 'react-router-dom';

// Componente para mostrar las comandas de los alumnos
// Vista: alumno

const Clases = ({ aulas, id, menus, setMenus, aulasCompletadas, setAulasCompletadas, isSend, baseIndex }) => {

    if ((aulas === undefined || aulas.length === 0) && !isSend) {
        return (
            <h1>NO HAY AULAS EN EL SISTEMA</h1>
        )
    }
    else {
        //alert(baseIndex);
        const nav = useNavigate();

        const goToComandas = (aula, nroAula) => {
            nav(`/comandas/${id}`, { state: { aula: aula, menus: menus, nroAula: nroAula, aulasCompletadas: aulasCompletadas } });
        }
        let res = [];

        for (let i = 0; i < aulas.length; i++) {
            res.push(
                <button key={aulas[i].clase} className={aulasCompletadas[baseIndex + i] ? "botones-clase-completada" : "botonesClase"} onClick={() => goToComandas(aulas[i].clase, baseIndex + i)}>
                    <img className="foto" src={"http://localhost:3900/api/usuarios/get-foto/" + aulas[i].id} />
                    {"Aula " + aulas[i].clase}
                </button>
            )
        }

        return (
            <div className="cuerpo">
                <div className="recuadrosclases">
                    {res}
                </div>

            </div>
        )
    }

}

export default Clases;