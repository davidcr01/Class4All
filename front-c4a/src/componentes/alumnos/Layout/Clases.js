import React from 'react';
import {useNavigate} from 'react-router-dom';

// Componente para seleccionar la clase para iniciar sesión como alumno
// Vista: alumno

const Clases = ({aulas}) => {
    let user = require("../../../img/user.png")


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
                    <button key={aulas[i].clase} className="botonesClase" onClick={() => goToClassmates(aulas[i].clase)}>
                        <img className="foto" src={"http://localhost:3900/api/usuarios/get-foto/"+aulas[i].id}/>
                        {"Aula "+aulas[i].clase}
                    </button>
                )
            }

            const handleClick = () =>{
                nav("/sesion-profesores");
            };
        return (
            <div className="cuerpo">
                <div className="recuadrosclases">
                    {res}
                </div>
                <img className="imagenUser" src={user} onClick={handleClick}></img>
            </div>
        )
        }

}

export default Clases;