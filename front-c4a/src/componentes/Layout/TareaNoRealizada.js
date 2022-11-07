import React, { useEffect, useState } from 'react';

const TareaNoRealizada = (props) => {

    const [nombre, setNombre] = React.useState('');
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        setCargando(true);
        getUser();
    }, []);


    const getUser = async () => {
        try {
            const url = "http://localhost:3900/api/usuarios/user/" + props.tarea.usuarioAsignado
            console.log(url);
            const res = await fetch(url)
            const data = await res.json();

            console.log(data);

            setNombre(data.usuario.nombre);
            setCargando(false);

            console.log(nombre);
            console.log(props.tarea.usuarioAsignado);

        } catch (error) {
            console.log(error);

        }
    }

    if (cargando) {
        return <div>Cargando...</div>
    } else {
        return (
            <div className="tarea">
                <div>Tarea: {props.tarea.nombre}</div>
                <div>Fecha: {props.tarea.fecha}</div>
                <div>Usuario: {nombre}</div>
                <div>Realizado: No</div>
                <div>Confirmar: <input type="checkbox"></input></div>
                <div className="botonesTareasReal">
                    <div className="botonTareasReal">BIEN</div>
                    <div className="botonTareasReal">MAL</div>
                    <div className="botonTareasReal">TARDE</div>
                </div>
                <form>
                    <textarea name="message" rows="5" cols="80">
                        Retroalimentación:
                    </textarea>
                </form>

            </div>)
    }


}

export default TareaNoRealizada;
