import React, { useEffect, useState } from 'react';
import CargandoProgress from './CargandoProgress.js';
import Usuario from './Usuario.js';

export const Usuarios = () => {
    const [usuarios,SetUsuarios] =  useState([]); 

    const conseguirUsuarios = async() =>{
        try {
            const url = "http://localhost:3900/api/usuarios/listar-usuarios";
            
            const res = await fetch(url)
            const data = await res.json();
            SetUsuarios(data.usuarios);
        } catch (error) {
            console.log(error);


        }
    }

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