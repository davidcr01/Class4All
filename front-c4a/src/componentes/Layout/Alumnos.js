import React from 'react';
import img from "../../img/agenda.png"

const Alumnos = (props) => {
    let prueba=[];
    let apartados = ["Pepe", "Ana", "Jaimito", "Atanasia", "Andrés", "Alberto"]
    let pictogramas = [ require("../../img/profeA.jpg"), require("../../img/profeB.jpg"), require("../../img/profeC.jpg"), require("../../img/profeD.jpg"), require("../../img/user.png"), require("../../img/user.png")]
    let user = require("../../img/user.png")

    /*for(let i=0; i< 4; i++){
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
    );*/

    const style = {
        width: "auto", 
        backgroundColor: "#E2E2E2", 
        borderColor: "black", 
        borderStyle: "solid", 
        borderWidth: "3px", 
        display: "grid", 
        marginBottom: "5px", 
        fontSize: "2vw", 
        textAlign:"center", 
        padding: "3vw 0",
    };

    const style2 = {width: "50%", 
        height: "auto", 
        display: "block", 
        marginLeft: "auto",
        marginRight: "auto"
    };

    const recuadros = {width:"100%", 
        paddingTop:"15px", 
        paddingBottom:"15px", 
        justifyContent: "center", 
        display: "grid", 
        marginRight:"auto", 
        marginLeft:"auto", 
        gridTemplateColumns: "25% 25% 25%", 
        gridTemplateRows:"20vw 20vw", 
        gridColumnGap: "40px", 
        gridRowGap: "15px"
    };

    const imagenUser = {alignSelf: "end", 
        width: "5%", height: "auto%", 
        display: "block", 
        marginLeft: "auto", 
        marginRight: "5%", 
        marginBottom: "2%"
    };

    const cuerpo = {
        width: "auto", 
        borderWidth: "3px", 
        display: "flex", 
        marginBottom: "5px", 
        padding: "3vw 0",
    };

    for(let i=0; i< 6; i++){
        prueba.push(
            <div style={style}>
                <img style={style2} src={pictogramas[i]}/>
                {apartados[i]}
            </div>
            
        );
    }

    return (
        <div style={cuerpo}>
            <div style={recuadros}>
                {prueba}
            </div>
            <img style={imagenUser} src={user}></img>
        </div>
    );

}

export default Alumnos;