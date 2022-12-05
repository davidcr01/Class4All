import React from 'react';

// Vista: admins

const Usuario = (props) => {

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

    return (
        <div className="usuario">
            <div className="datosuser">{props.user.nombre} {props.user.apellido1} {props.user.apellido2}</div>
            <div className="botonesuser">
                <button className="botonuser botonuser-modificar">Modificar</button>
                <button className="botonuser botonuser-eliminar" onClick={eliminarUsuario}>Eliminar</button>
                <button className="botonuser botonuser-ver">Ver</button>
            </div>
        </div>
    )

}

export default Usuario;