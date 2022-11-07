import React, {useEffect, useState} from 'react';
import '../../styles.css';

const FormularioNuevoUsuario = ()=> {

    const [value, setValue] = React.useState(0);


    const cambiar = (event) => {
        setValue(event.target.value);
    }

    const enviar = (event) => {
        event.preventDefault();
        
        let datos = event.target;

        let usuario = {
            nombre: datos.nombre.value,
            apellido1: datos.apellido1.value,
            apellido2: datos.apellido2.value,
            email: datos.email.value,
            password: datos.password.value,
            rol: datos.rol.value,
        }
        if(usuario.rol == 1){
            usuario.rol = 'Administrador'
        }else if(usuario.rol == 2){
            usuario.rol= 'Profesor'
            usuario["clase"]= datos.clase.value
        }
        else if(usuario.rol == 3){
            usuario["preferencias"] =  datos.preferencias.value
            usuario["clase"]= datos.clase.value
            usuario.rol = 'Alumno'
        }
        console.log(usuario.rol);
        fetch('http://localhost:3900/api/usuarios/crear-usuario', {
            method: 'POST',
            body: usuario,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
     }




    return(
    <div className="formuser">
        <form 
            id="formulariocrear"
            onSubmit={enviar}>
            <div className="form-group">
                <p><label className="etiq" htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre"/>
                </p>
                <p><label className="etiq" htmlFor="apellido1">Primer Apellido</label>
                <input type="text" id="apellido1"/>
                </p>
                <p><label className="etiq" htmlFor="apellido2">Segundo Apellido</label>
                <input type="text" id="apellido2"/>
                </p>
                <p><label className="etiq" htmlFor="email">Correo Electrónico</label>
                <input type="text" id="email"/>
                </p>
                <p><label className="etiq" htmlFor="password">Contraseña</label>
                <input type="password" id="password"/>
                </p>
                <p><label className="etiq" htmlFor="rol">Rol</label>
                <select onChange={cambiar} defaultValue={0} id="rol">
                    <option value="0"  disabled>Elige un rol</option>
                    <option value="1">Administrador</option>
                    <option value="2">Profesor</option>

                    <option value="3">Alumno</option>
                </select>
                </p>
                {(value == 3 &&
                    <p><label className="etiq" htmlFor="preferencias">Preferencias</label>
                    <input type="number" id="preferencias" min="0" max="10"></input></p>
                    )
                }
                {((value == 2 || value == 3) &&
                    <p><label className="etiq" htmlFor="clase">Clase</label>
                    <input type="text" id="clase"></input></p>
                    )
                }
                </div>
                <input type="submit" value="Enviar"/>
                </form>

    </div>
    )
    }

export default FormularioNuevoUsuario;