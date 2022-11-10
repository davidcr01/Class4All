import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";
import { loginAlumno } from '../../interfazCookies/cookies';

const Alumnos = ({alumnos}) => {
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
        borderRadius: "35px",
        fontWeight: "bold"
    };

    const style2 = {
        width: "50%", 
        height: "auto", 
        display: "block", 
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "50%"
    };

    const recuadros = {
        width:"100%", 
        paddingTop:"15px", 
        paddingBottom:"15px", 
        justifyContent: "center", 
        display: "grid", 
        marginRight:"auto", 
        marginLeft:"auto", 
        gridTemplateColumns: "25% 25%", 
        gridTemplateRows:"20vw 20vw", 
        gridColumnGap: "40px", 
        gridRowGap: "15px"
    };

    const imagenUser = {
        alignSelf: "end", 
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



    const nav = useNavigate();

    if(alumnos !== undefined) {
        let alumnosJSX = []
        const cookies = new Cookies();

        const loginUser = (id) => {
            loginAlumno(id).then((data) => {
                if(data !== undefined){
                    alert(JSON.stringify(data));
                    cookies.set("loginCookie", {id: data.id, sessionID: data.sessionID, rol: data.rol}, {maxAge: 86400});
                }


                nav("/pagina-principal");
            });
        }

        for(let i=0; i<alumnos.length; i++){
            alumnosJSX.push(
                <div style={style} onClick={()=> loginUser(alumnos[i]._id)}>
                    <img style={style2} src={"http://localhost:3900/api/usuarios/foto/"+alumnos[i]._id}/>
                    {alumnos[i].nombre}
                </div>                
            )
        }

        const handleClick = () =>{
            nav("/sesion-profesores");
        };

        return  (
            <div style={cuerpo}>
                <div style={recuadros}>
                    {alumnosJSX}
                </div>

                <img style={imagenUser} src={user} onClick={handleClick}></img>
            </div>
        )
    }

    else{
        return (
            <div>
                <h1>NO HAY ALUMNOS EN ESTA CLASE</h1>
            </div>
        )
    }
}

export default Alumnos;