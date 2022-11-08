import React, { useEffect, useState } from 'react';

const TareaAsignada = (props) => {

    const [nombre, setNombre] = React.useState('');
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        setCargando(true);
        getUser();
    }, []);

    const desasignarTarea = (event) => {
        event.preventDefault();

        const url = "http://localhost:3900/api/tareas/desasignar-tarea/" + props.tarea._id;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                window.location.reload();
            })
            .catch(err => console.log(err));
    }
    

    const getUser = async () => {
        try {
            const url = "http://localhost:3900/api/usuarios/user/" + props.tarea.usuarioAsignado
            console.log(url);
            const res = await fetch(url)
            const data = await res.json();


            setNombre(data.usuario.nombre);
            setCargando(false);
            
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
                <form onSubmit={desasignarTarea}><input type="submit" value="Desasignar"/></form>
            </div>)
            }


    }

    export default TareaAsignada;