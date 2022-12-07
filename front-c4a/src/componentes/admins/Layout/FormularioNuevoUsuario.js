import React, {useState} from 'react';
import '../styles.css';
import { useNavigate } from 'react-router-dom';

// Vista: admins

const FormularioNuevoUsuario = ()=> {

    const [value, setValue] = useState(0);
    let nav = useNavigate();

    const cambiar = (event) => {
        setValue(event.target.value);
    }

    function eliminarEmail(){
        document.getElementById("email").remove();
        
        var id = "email";
        let labelBuscada;
        let labels = document.getElementsByTagName("label");
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor === id) {
                labelBuscada = labels[i];
                break;
            }   
        }
        labelBuscada.remove();

    }

    const enviar = (event) => {
        event.preventDefault();

        let datos = event.target;

        let usuario = {
            nombre: datos.nombre.value,
            apellido1: datos.apellido1.value,
            apellido2: datos.apellido2.value,
            password: datos.password.value,
            rol: datos.rol.value,
        }
        if(usuario.rol == 1){
            usuario.rol = 'Administrador';
        }else if(usuario.rol == 2){
            usuario.rol= 'Profesor';
            usuario["clase"]= datos.clase.value;
            usuario.email = datos.email.value;
        }
        else if(usuario.rol == 3){
            //usuario["preferencias"] =  datos.preferencias.value;
            usuario["clase"]= datos.clase.value;
            usuario.rol = 'Alumno';
            
        }

        var urlencoded = new URLSearchParams();
        urlencoded.append("nombre", usuario.nombre);
        urlencoded.append("apellido1", usuario.apellido1);
        urlencoded.append("apellido2", usuario.apellido2);
        // urlencoded.append("email", usuario.email);
        // urlencoded.append("password", usuario.password);
        urlencoded.append("foto", "./img/usuario.png");
        urlencoded.append("rol", usuario.rol);

        if(usuario.rol == 'Profesor'){
            urlencoded.append("clase", usuario.clase);
            urlencoded.append("correo", usuario.email);
        }
        if(usuario.rol == 'Alumno'){
            //urlencoded.append("preferencias", usuario.preferencias);
            urlencoded.append("clase", usuario.clase);
        }
        if(usuario.rol == 'Administrador'){
            urlencoded.append("clase","Todas");
            urlencoded.append("correo", usuario.email);
        }

        var requestOptions = {
            method: 'POST',
            body: urlencoded,
            redirect: 'follow'
        };

        console.log(urlencoded)
        fetch('http://localhost:3900/api/usuarios/crear-usuario', requestOptions).
        then(nav("/gestion-usuarios")).
        catch(error => console.log('error', error));



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
                {(value == 3 && eliminarEmail() &&
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