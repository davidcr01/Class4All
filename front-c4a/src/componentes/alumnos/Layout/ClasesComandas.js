import React from 'react';
import {useNavigate} from 'react-router-dom';

// Componente para mostrar las comandas de los alumnos
// Vista: alumno

const Clases = ({aulas, id}) => {


        if(aulas === undefined || aulas.length === 0){
            return (
                <h1>NO HAY AULAS EN EL SISTEMA</h1>
            )
        }
        else{
            const nav = useNavigate();

            const goToComandas = (route) => {
                nav(`/comandas/${id}`, {state: {aula: route}});
            }
            let res = [];

            for(let i=0; i<aulas.length; i++){
                res.push(
                    <button key={aulas[i].clase} className="botonesClase" onClick={() => goToComandas(aulas[i].clase)}>
                        <img className="foto" src={"http://localhost:3900/api/usuarios/get-foto/"+aulas[i].id}/>
                        {"Aula "+aulas[i].clase}
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