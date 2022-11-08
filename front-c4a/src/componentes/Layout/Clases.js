import React, {useState, useEffect} from 'react';
import img from "../../img/agenda.png"

const Clases = (props) => {
    let prueba=[];
    let apartados = ["ClaseA", "ClaseB", "ClaseC", "ClaseD"]
    let pictogramas = [ require("../../img/profeA.jpg"), require("../../img/profeB.jpg"), require("../../img/profeC.jpg"), require("../../img/profeD.jpg")]
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

    //Obtener las aulas
    const [aulas, setAulas] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() =>{
        const getAulas = async () => {
            try {
                //alert("cookie cookie: "+cookies.get("loginCookie"));
                const url = "http://localhost:3900/api/usuarios/aulas/";
                console.log(url);
                const res = await fetch(url)
                const data = await res.json();
        
                //console.log("datos")
                //console.log(data);
        
                return data;
                
            } catch (error) {
                console.log(error);
        
                return undefined;
            }              
        }

        getAulas().then((data)=>{
            setCargando(false);
            setAulas(data.aulas);
        })
    }, []);

    console.log("aulas");
    console.log(aulas);

    if(cargando)
        return (
            <div>
                <h1>CARGANDO...</h1>
            </div>
        );
    else{
        let res = [];

        for(let i=0; i<aulas.length; i++){
            //let foto =require("../../img/"+aulas[i].foto+".jpg")

            //let foto = require.context("../../img", true)//, /\.(png|jpg|gif|webp)$/);
            res.push(
                <div style={style}>
                    <img style={style2} src={"../img/"+aulas[i].foto}/>
                    {"Aula "+aulas[i].clase}
                </div>                
            )
        }

        return (
            <div style={style5}>
            <div style={style3}>
                {res}
            </div>
            <img style={style4} src={user}></img>
            </div>            
        )
    }
}

export default Clases;