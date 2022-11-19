import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";
import { loginAlumno } from '../../../interfazCookies/cookies';

import { ContextoRol } from '../../../contexto/Roles';

// Componente para mostrar el login de los alumnos
// Vista: compartido

const Alumnos = ({alumnos}) => {
    let user = require("../../../img/user.png")

    const {setCookie} = React.useContext(ContextoRol);

    const style2 = {
        width: "50%",
        height: "auto",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "50%",
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

    const imagenUser = {position: "absolute",  cursor: "pointer", width: "10%", height: "auto%", bottom: "2%", right: "2%"};


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
                    cookies.set("loginCookie", {id: data.id, sessionID: data.sessionID, rol: data.rol}, {maxAge: 86400});
                    setCookie('Alumno');
                    nav('/');
                }


                //nav("/pagina-principal");
            });
        }

        for(let i=0; i<alumnos.length; i++){
            alumnosJSX.push(
                <button key={(alumnos[i]._id)} className="botonesAlumnos" onClick={()=> loginUser(alumnos[i]._id)}>
                    <img style={style2} src={"http://localhost:3900/api/usuarios/get-foto/"+alumnos[i]._id}/>
                    {alumnos[i].nombre}
                </button>
            )
        }

        return  (
            <div style={cuerpo}>
                <div style={recuadros}>
                    {alumnosJSX}
                </div>
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