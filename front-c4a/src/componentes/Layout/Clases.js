import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import CargandoProgress from './CargandoProgress';

const Clases = ({aulas}) => {


    //let prueba=[];
    //let apartados = ["ClaseA", "ClaseB", "ClaseC", "ClaseD"]
    //let pictogramas = [ require("../../img/profeA.jpg"), require("../../img/profeB.jpg"), require("../../img/profeC.jpg"), require("../../img/profeD.jpg")]
    let user = require("../../img/user.png")

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
        padding: "3vw 0",
        paddingBottom: "4.5em",
        borderRadius: "35px",
        fontWeight: "bold"
    };

    const style2 = {width: "40%", height: "auto", display: "block", marginLeft: "auto", marginRight: "auto", borderRadius: "50%"};

    const style3 = {width:"100%", paddingTop:"10px", paddingBottom:"15px", justifyContent: "center", display: "grid", marginRight:"auto", marginLeft:"auto", gridTemplateColumns: "35% 35%", gridTemplateRows:"20vw 20vw", gridGap:"64px"};//gridColumnGap: "40px", gridRowGap: "15px"};

    const style4 = {alignSelf: "end", width: "5%", height: "auto%", display: "block", marginLeft: "auto", marginRight: "5%", marginBottom: "2%"};

    const style5 = {
        width: "auto", 
        borderWidth: "3px", 
        display: "flex", 
        marginBottom: "5px", 
        padding: "3vw 0",
    };

    //Obtener las aulas
    //const [cargando, setCargando] = useState(true);

    console.log("aulas");
    console.log(aulas);
    const nav = useNavigate();

        const goToClassmates = (route) => {
            nav("/sesion-alumnos", {state: {aula: route}});
        }
        let res = [];

        for(let i=0; i<aulas.length; i++){
            res.push(
                <div style={style} onClick={() => goToClassmates(aulas[i].clase)}>
                    <img style={style2} src={"http://localhost:3900/api/usuarios/foto/"+aulas[i].id}/>
                    {"Aula "+aulas[i].clase}
                </div>                
            )
        }

        const handleClick = () =>{
            nav("/sesion-profesores");
        };

        return (
            <div style={style5}>
            <div style={style3}>
                {res}
            </div>
            <img style={style4} src={user} onClick={handleClick}></img>
            </div>            
        )
    
}

export default Clases;