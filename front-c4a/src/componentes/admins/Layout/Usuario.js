import React from 'react';
import { useNavigate } from 'react-router-dom';

// Vista: admins

const Usuario = (props) => {
    const nav = useNavigate();

    const eliminarUsuario = () => {
        let nombreCompleto = ""+props.user.nombre + " " + props.user.apellido1 + " " + props.user.apellido2;
        let res = window.confirm("¿Está seguro de que desea eliminar a "+nombreCompleto+"?");

        if(res){
            const url = "http://localhost:3900/api/usuarios/delete-user/"+props.user._id;

            fetch(url,{
                method: "DELETE"
            }).then(res => res.json()).then(data => {
                if(data !== undefined && data.status === "success"){
                    alert("Usuario eliminado con éxito");
                    window.location.reload();       //Cutrada, quizas con un form es mejor
                }
                else{
                    alert("Usuario no eliminado, error interno");
                }
            })
            .catch(error => alert(error));            

        }
    }

    const verFichaAlumno = (route) => {
        nav("/ficha-user", {state: {alumno: route}});        
    }

    const verModificarUsuario = (route) => {
        nav("/modificar-usuario", {state: {alumno: route}});
    }

    return (
        <div className="usuario">
            <div className="datosuser">{props.user.nombre} {props.user.apellido1} {props.user.apellido2}</div>
            <div className="botonesuser">
                <button className="botonuser botonuser-modificar" onClick={() => verModificarUsuario(props.user)}>Modificar</button>
                <button className="botonuser botonuser-eliminar" onClick={eliminarUsuario}>Eliminar</button>
                <button className="botonuser botonuser-ver" onClick={() => verFichaAlumno(props.user)}>Ver</button>
            </div>
        </div>
    )

}

export default Usuario;