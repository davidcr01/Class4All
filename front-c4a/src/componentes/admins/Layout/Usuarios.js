import { useSlotProps } from '@mui/base';
import React, { useEffect, useState } from 'react';
import CargandoProgress from '../../compartido/Layout/CargandoProgress';
import Usuario from './Usuario.js';

// Vista: admins

export const Usuarios = (props) => {
    const [usuarios, SetUsuarios] =  useState([]);
    const [usuariosLista, SetUsuariosLista] =  useState([]);

    const conseguirUsuarios = async() =>{
        try {
            const url = "http://localhost:3900/api/usuarios/lista-usuarios";

            const res = await fetch(url)
            const data = await res.json();
            SetUsuarios(data.usuarios);
            SetUsuariosLista(data.usuarios);

        } catch (error) {
            console.log(error);
        }




        //usuarios = usuariosLista;

    }

    useEffect(() => {
        let users = [];

        if(props.filtroalumnos === true){
            users = users.concat(usuarios.filter(usuario => usuario.rol === "Alumno"));
        }
        if(props.filtroadmins === true){
            console.log("Entro a profes");
            users = users.concat(usuarios.filter(usuario => usuario.rol === "Administrador"));
        }
        if(props.filtroprofesores === true){
            users = users.concat(usuarios.filter(usuario => usuario.rol === "Profesor"));
        }



        SetUsuariosLista(users);
        console.log(users);

    }, [props.filtroalumnos, props.filtroadmins, props.filtroprofesores]);


    useEffect(() => {
        conseguirUsuarios();
    }, []);
    
    if(usuariosLista.length !== 0){

  return (
    <div>
        
        {usuariosLista != null && usuariosLista.length !== 0 ?
        usuariosLista.map(t =>{
            return(
                <Usuario key={t._id} className="usuariolista" user={t}/ >
            );
        })
        : <CargandoProgress/>

        }
    </div>
  )
    }
    else{
        return(
            <div>
                No hay usuarios que mostrar
            </div>
        )
    }
}


export default Usuarios;