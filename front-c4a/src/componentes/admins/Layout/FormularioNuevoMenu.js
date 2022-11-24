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

        let menu = {
            nombre: datos.nombre.value,
            imagen: datos.imagen.value,
        }

        var urlencoded = new URLSearchParams();
        urlencoded.append("nombre", menu.nombre);
        urlencoded.append("imagen", menu.imagen);

        var requestOptions = {
            method: 'POST',
            body: urlencoded,
            redirect: 'follow'
        };

        console.log(urlencoded)
        fetch('http://localhost:3900/api/menus/crear-menu', requestOptions).
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
                <p><label className="etiq" htmlFor="imagen">Imagen</label>
                <input type="text" id="imagen"/>
                </p>
            </div>
            <input type="submit" value="Enviar"/>
        </form>

    </div>
    )
    }

export default FormularioNuevoMenu;