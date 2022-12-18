import React, {useEffect, useState} from 'react';
import '../styles.css';
import '../../alumnos/styles.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// Vista: admins

const FormularioNuevoUsuario = ()=> {

    const [value, setValue] = useState(0);

    // const [images, setImages] = useState([]);
    // const [imageURLs, setImageURLs] = useState([]);

    // useEffect(() => {
    //     if (images.length < 1) {
    //         return;
    //     }
    //     const newImagesUrls  = [];
    //     newImagesUrls.push(URL.createObjectURL(images[0]));
    //     setImageURLs(newImagesUrls);
    // }, [images]);

    // const onImageChange = (event) => {
    //     setImages(event.target.files);
    // }

    const location = useLocation();
    let nav = useNavigate();

    // const cambiar = (event) => {
    //     setValue(event.target.value);
    // }




    const enviar = (event) => {
        event.preventDefault();

        var urlencoded = new URLSearchParams();
        urlencoded.append("tamañoLetra", event.target.tamLetra.value);
        urlencoded.append("tamañoIconos", event.target.tamIco.value);

        // urlencoded.append("apellido1", usuario.apellido1);
        // urlencoded.append("apellido2", usuario.apellido2);
        // urlencoded.append("password", usuario.password);
        // urlencoded.append("foto", usuario.imagen);
        // urlencoded.append("rol", usuario.rol);

        // if(usuario.rol == 'Profesor'){
        //     urlencoded.append("clase", usuario.clase);
        //     urlencoded.append("correo", usuario.email);
        // }
        // if(usuario.rol == 'Alumno'){
        //     urlencoded.append("preferencias", usuario.preferencias);
        //     urlencoded.append("clase", usuario.clase);
        // }
        // if(usuario.rol == 'Administrador'){
        //     urlencoded.append("correo", usuario.email);
        // }

        var requestOptions = {
            method: 'POST',
            body: urlencoded,
            redirect: 'follow'
        };
        
        fetch('http://localhost:3900/api/usuarios/modificar-tamanos/' + location.state.alumno._id, requestOptions)
        .catch(error => console.log('error', error));
        nav("/gestion-usuarios")

        // const formData = new FormData();
        // formData.append("img", datos.imagen.files[0]);

        // var requestOptions = {
        //     method: 'POST',
        //     body: formData,
        //     redirect: 'follow',

        // };

        // fetch('http://localhost:3900/api/menus/subir-foto', requestOptions).
        // then(response => response.text()).
        // then(result => console.log(result)).
        // catch(error => console.log('error', error));


     }




    return(
    <div className="formuser">
        <form
            id="formulariocrear"
            onSubmit={enviar}>
            <div className="form-group">
                {/* <p><label className="etiq" htmlFor="rol">Rol</label>
                <select onChange={cambiar} defaultValue={0} id="rol">
                    <option value="0"  disabled>Elige un rol</option>
                    <option value="1">Administrador</option>
                    <option value="2">Profesor</option>

                    <option value="3">Alumno</option>
                </select>
                </p>
                <p><label className="etiq" htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre"/>
                </p>
                <p><label className="etiq" htmlFor="apellido1">Primer Apellido</label>
                <input type="text" id="apellido1"/>
                </p>
                <p><label className="etiq" htmlFor="apellido2">Segundo Apellido</label>
                <input type="text" id="apellido2"/>
                </p>
                
                <p><label className="etiq" htmlFor="password">Contraseña</label>
                <input type="password" id="password"/>
                </p>
                {(value == 1 || value == 2) &&(
                    <p><label className="etiq" htmlFor="email">Correo Electrónico</label>
                    <input type="text" id="email"/>
                    </p>
                )}
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
                <p><label className="etiq" htmlFor="imagen">Imagen de perfil</label>
                <input type="file" accept="image/*" id="imagen" onChange={onImageChange}/>
                </p>
                <img src={imageURLs[0]}/> */}

                <p><label className="etiq" htmlFor="tamLetra">Tamaño de letra</label>
                <select defaultValue={location.state.alumno.tamañoLetra} id="tamLetra">
                    <option value="0"  disabled>Elige un tamaño</option>
                    <option value="1">Pequeño</option>
                    <option value="2">Mediano</option>
                    <option value="3">Grande</option>

                </select>
                </p>
                <p><label className="etiq" htmlFor="tamIco">Tamaño de icono</label>
                <select defaultValue={location.state.alumno.tamañoIconos} id="tamIco">
                    <option value="0"  disabled>Elige un tamaño</option>
                    <option value="1">Pequeño</option>
                    <option value="2">Mediano</option>
                    <option value="3">Grande</option>

                </select>
                </p>
                </div>
                <input type="submit" value="Enviar"/>
                </form>

    </div>
    )
    }

export default FormularioNuevoUsuario;