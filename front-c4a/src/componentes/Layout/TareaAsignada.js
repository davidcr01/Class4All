import React, { useEffect, useState } from 'react';

const TareaAsignada = (props) => {

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

            if(cargando){
                return <div>Cargando...</div>
            }else{
                return (
                <div className="tarea">
                <div>Tarea: {props.tarea.nombre}</div>
                <div>Fecha: {props.tarea.fechaAsignada}</div>
                <div>Usuario: {nombre}</div>
                <div>Realizado: No</div>
                <div>Confirmar <input type="checkbox"></input></div>

            </div>)
            }


    }

    export default TareaAsignada;