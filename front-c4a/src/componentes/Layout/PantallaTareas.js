import React from 'react';
import img from "../../img/agenda.png"
import {useNavigate} from 'react-router-dom';

const PantallaTareas = (props) => {
    let prueba=[];
    let apartados = ["Agenda", "Tareas Realizadas"]
    let pictogramas = [ require("../../img/agenda.png"), require("../../img/realizado.png")]
    let enlaces = ["/Agenda", "/TareasRealizadas"]
    let user = require("../../img/user.png")

    const style = {
        width: "auto", 
        cursor:"pointer",
        backgroundColor: "#E2E2E2", 
        borderColor: "black", 
        borderStyle: "solid", 
        borderWidth: "3px", 
        display: "grid", 
        marginBottom: "5px", 
        fontSize: "4vw", 
        textAlign:"center", 
        padding: "3vw 0",
        borderRadius: "55px"
    };

    const style2 = {width: "30%", height: "auto", display: "block", marginLeft: "auto", marginRight: "auto"};

    const style3 = {width:"100%", paddingTop:"15px", paddingBottom:"15px", justifyContent: "center", display: "grid", marginRight:"auto", marginLeft:"auto", gridTemplateColumns: "35% 35%", gridColumnGap: "40px", gridRowGap: "15px"};

    //const style4 = {alignSelf: "end", width: "5%", height: "auto%", display: "block", marginLeft: "auto", marginRight: "5%", marginBottom: "2%"};
    const nav = useNavigate();

    const style5 = {
        width: "auto", 
        borderWidth: "3px", 
        marginBottom: "5px", 
        padding: "3vw 0",
        justifyContent: "center",
        alignItems: "center"
    };

    for(let i=0; i< 2; i++){
        prueba.push(
            <div style={style} onClick={() => nav(enlaces[i])}>
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
        </div>
    );

}

export default PantallaTareas;