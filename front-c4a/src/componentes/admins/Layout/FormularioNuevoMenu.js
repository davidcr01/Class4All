import React, {useEffect, useState} from 'react';
import '../styles.css';

// Vista: admins

const FormularioNuevoMenu = ()=> {


    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    useEffect(() => {
        if (images.length < 1) {
            return;
        }
        const newImagesUrls  = [];
        newImagesUrls.push(URL.createObjectURL(images[0]));
        setImageURLs(newImagesUrls);
    }, [images]);

    const onImageChange = (event) => {
        setImages(event.target.files);
    }



    

    const enviar = (event) => {
        event.preventDefault();

        let datos = event.target;

        let menu = {
            nombre: datos.nombre.value,
            imagen: datos.imagen.files[0].name,
            alt: datos.alt.value
        }

        var urlencoded = new URLSearchParams();
        urlencoded.append("nombre", menu.nombre);
        urlencoded.append("imagen", menu.imagen);
        urlencoded.append("alt", menu.alt);

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



        const formData = new FormData();
        formData.append("img", datos.imagen.files[0]);

        var requestOptions = {
            method: 'POST',
            body: formData,
            redirect: 'follow',

        };

        fetch('http://localhost:3900/api/menus/subir-foto', requestOptions).
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
                {/* <p><label className="etiq" htmlFor="imagen">Imagen</label>
                <input type="text" id="imagen"/>
                </p> */}
                <p><label className="etiq" htmlFor="imagen"></label>
                <input type="file" accept="image/*" id="imagen" onChange={onImageChange}/>
                </p>
                <img src={imageURLs[0]}/>
                <p><label className="etiq" htmlFor="alt">Texto Alternativo</label>
                <input type="text" id="alt"/>
                </p>
            </div>
            <input type="submit" value="Enviar"/>
        </form>

    </div>
    )
    }

export default FormularioNuevoMenu;