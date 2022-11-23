import React, {useState} from 'react';
import '../styles.css';

// Vista: admins

const FormularioNuevoMenu = ()=> {

    const [value, setValue] = useState(0);


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
        }
        if(usuario.rol == 'Alumno'){
            urlencoded.append("preferencias", usuario.preferencias);
            urlencoded.append("clase", usuario.clase);
        }
        if(usuario.rol == 'Administrador'){
            urlencoded.append("clase","Todas");
        }

        var requestOptions = {
            method: 'POST',
            body: urlencoded,
            redirect: 'follow'
        };

        console.log(urlencoded)
        fetch('http://localhost:3900/api/usuarios/crear-usuario', requestOptions).
        then(response => response.text()).
        then(result => console.log(result)).
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
                <p><label className="etiq" htmlFor="apellido1">Imagen</label>
                <input type="text" id="apellido1"/>
                </p>
            </div>
            <input type="submit" value="Enviar"/>
        </form>

    </div>
    )
    }

export default FormularioNuevoMenu;