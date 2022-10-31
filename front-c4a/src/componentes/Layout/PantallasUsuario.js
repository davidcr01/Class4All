import React from 'react';
import img from "../../img/agenda.png"

const PantallasUsuario = (props) => {
    let prueba=[];
    let apartados = ["Agenda", "Chat", "Retroalimentacion", "Consentimiento"]
    let pictogramas = [ require("../../img/agenda.png"), require("../../img/chat.png"), require("../../img/retroalimentacion.png"), require("../../img/firmar.png")]
    for(let i=0; i< 4; i++){
        prueba.push(
            React.createElement(
                        "div",
                        { style: {width: "auto", backgroundColor: "#E2E2E2", borderColor: "black", borderStyle: "solid", borderWidth: "3px", display: "grid", marginBottom: "5px", fontSize: "4vw", textAlign:"center", padding: "3vw 0"} },
                        //Imagen de pictograma
                        React.createElement("img", {src:  pictogramas[i], style: {width: "30%", height: "auto", display: "block", marginLeft: "auto", marginRight: "auto"}}),
                        //Texto de apartado
                        apartados[i]
                        ));
    }
    return (
        React.createElement("div", {style: {width:"100%", paddingTop:"15px", paddingBottom:"15px", justifyContent: "center", display: "grid", marginRight:"auto", marginLeft:"auto", gridTemplateColumns: "35% 35%", gridTemplateRows:"20vw 20vw 20vw", gridColumnGap: "40px", gridRowGap: "15px"}}, prueba)
    );
}

export default PantallasUsuario;