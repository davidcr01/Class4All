import React from 'react';
import {useNavigate} from 'react-router-dom';

// Vista: alumnos

const PantallaTareas = (props) => {
    let prueba=[];
    let apartados = ["Agenda", "Tareas Realizadas"]
    let pictogramas = [ require("../../../../img/agenda.png"), require("../../../../img/realizado.png")]
    let enlaces = ["/Agenda", "/TareasRealizadas"]



    //const style4 = {alignSelf: "end", width: "5%", height: "auto%", display: "block", marginLeft: "auto", marginRight: "5%", marginBottom: "2%"};
    const nav = useNavigate();


    for(let i=0; i< 2; i++){
        prueba.push(
            <button className='botonesPT' onClick={() => nav(enlaces[i])}>
                <img class="imgpantalla" src={pictogramas[i]}/>
                {apartados[i]}
            </button>

        );
    }

    return (
        <div className="cuerpopantallatareas">
            <div className="imgspantalla">
                {prueba}
            </div>
        </div>
    );

}

export default PantallaTareas;