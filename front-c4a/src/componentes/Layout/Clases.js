import React from 'react';
import img from "../../img/agenda.png"

const Clases = (props) => {
    let prueba=[];
    let apartados = ["ClaseA", "ClaseB", "ClaseC", "ClaseD"]
    let pictogramas = [ require("../../img/profeA.jpg"), require("../../img/profeB.jpg"), require("../../img/profeC.jpg"), require("../../img/profeD.jpg")]
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
        fontSize: "4vw", 
        textAlign:"center", 
        padding: "3vw 0"
    };

    const style2 = {width: "30%", height: "auto", display: "block", marginLeft: "auto", marginRight: "auto"};

    const style3 = {width:"100%", paddingTop:"15px", paddingBottom:"15px", justifyContent: "center", display: "grid", marginRight:"auto", marginLeft:"auto", gridTemplateColumns: "35% 35%", gridTemplateRows:"20vw 20vw", gridColumnGap: "40px", gridRowGap: "15px"};

    const style4 = {alignSelf: "end", width: "5%", height: "auto%", display: "block", marginLeft: "auto", marginRight: "5%", marginBottom: "2%"};

    const style5 = {
        width: "auto", 
        borderWidth: "3px", 
        display: "flex", 
        marginBottom: "5px", 
        padding: "3vw 0",
    };

    for(let i=0; i< 4; i++){
        prueba.push(
            <div style={style}>
                <img style={style2} src={pictogramas[i]}/>
                {apartados[i]}
            </div>
            
        );
    }

    return (
        <div style={style5}>
            <div style={style3}>
                {prueba}
            </div>
            <img style={style4} src={user}></img>
        </div>
    );

}

export default Clases;