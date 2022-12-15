import React from 'react';
import {useNavigate} from 'react-router-dom';

// Vista: alumnos
// Componente para mostrar los submenús de las tareas de los alumnos

const PantallaTareas = (props) => {
    let botones=[];
    let apartados = ["AGENDA", "TAREAS REALIZADAS"]
    let pictogramas = [ require("../../../../img/agenda.png"), require("../../../../img/realizado.png")]
    let enlaces = ["/Agenda", "/TareasRealizadas"]



    //const style4 = {alignSelf: "end", width: "5%", height: "auto%", display: "block", marginLeft: "auto", marginRight: "5%", marginBottom: "2%"};
    const nav = useNavigate();


    for(let i=0; i< 2; i++){
        botones.push(
            <button className='botonesPT' onClick={() => nav(enlaces[i])}>
                <img class="imgpantalla" src={pictogramas[i]}/>
                <p>{apartados[i]}</p>
            </button>

        );
    }

    return (
        <div className="cuerpopantallatareas">
            <div className="imgspantalla">
                {botones}
            </div>
        </div>
    );

}

export default PantallaTareas;