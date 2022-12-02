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
        } catch (error) {
            console.log(error);
        }




        //usuarios = usuariosLista;

    }

    useEffect(() => {
        let users = [];

        if(props.filtroalumnos === true){
            users = users.concat(usuarios.filter(usuario => usuario.rol === "alumno"));
        }
        if(props.filtroadmins === true){
            users = users.concat(usuarios.filter(usuario => usuario.rol === "admin"));
        }
        if(props.filtroprofesores === true){
            users = users.concat(usuarios.filter(usuario => usuario.rol === "profesor"));
        }

        console.log(users);


        usuariosLista = users;
    }, [props.filtroalumnos, props.filtroadmins, props.filtroprofesores]);


    useEffect(() => {
        conseguirUsuarios();
    }, []);

  return (
    <div>
        {usuarios != null && usuarios.length !== 0 ?
        usuarios.map(t =>{
            return(
                <Usuario key={t._id} className="usuariolista" user={t}/ >
            );
        })
        : <CargandoProgress/>

        }
    </div>
  )
}


export default Usuarios;