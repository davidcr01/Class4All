import React from 'react';
import {useNavigate} from 'react-router-dom';

const Clases = ({aulas}) => {
    let user = require("../../img/user.png")

    const style = {
        width: "auto", 
        backgroundColor: "#E2E2E2", 
        borderColor: "black", 
        borderStyle: "solid", 
        borderWidth: "3px", 
        display: "grid", 
        marginBottom: "5px", 
        fontSize: "2.5vw", 
        textAlign:"center", 
        padding: "3vw 0",
        paddingBottom: "5em",
        borderRadius: "35px",
        fontWeight: "bold",
        cursor: "pointer"
    };

    const style2 = {
        width: "50%", 
        height: "auto", 
        display: "block", 
        marginLeft: "auto", 
        marginRight: "auto", 
        borderRadius: "50%"
    };

    const style3 = {
        width:"100%", 
        paddingTop:"10px", 
        paddingBottom:"15px", 
        justifyContent: "center", 
        display: "grid", 
        marginRight:"auto", 
        marginLeft:"auto", 
        gridTemplateColumns: "25% 25%", 
        gridTemplateRows:"22vw 22vw", 
        gridColumnGap: "40px", 
        gridRowGap: "15px"
    };//gridColumnGap: "40px", gridRowGap: "15px"};

    const style4 = {position: "absolute", cursor: "pointer", width: "10%", height: "auto%", bottom: "2%", right: "2%"};

    const style5 = {
        width: "auto", 
        borderWidth: "3px", 
        display: "flex", 
        marginBottom: "5px", 
        padding: "3vw 0",
    };

        if(aulas === undefined || aulas.length === 0){
            return (
                <h1>NO HAY AULAS EN EL SISTEMA</h1>
            )
        }
        else{
            const nav = useNavigate();

            const goToClassmates = (route) => {
                nav("/sesion-alumnos", {state: {aula: route}});
            }
            let res = [];
    
            for(let i=0; i<aulas.length; i++){
                res.push(
                    <button className="botonesClase" onClick={() => goToClassmates(aulas[i].clase)}>
                        <img style={style2} src={"http://localhost:3900/api/usuarios/foto/"+aulas[i].id}/>
                        {"Aula "+aulas[i].clase}
                    </button>                
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
    
}

export default Clases;