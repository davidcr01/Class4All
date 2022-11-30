import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CargandoProgress from '../../../compartido/Layout/CargandoProgress';
import { ListItem } from '@mui/material';

// Vista: compartida (administradores y profesores)

const MaterialPedido = ({profesosID, alumno, materiales}) => {

 //   const [usuario, setUsuarios] = useState('');
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        setCargando(true);
  //      getUser();
    }, []);

    
    const eliminarMateriales = (event) => {
        event.preventDefault();
        const url = "http://localhost:3900/api/materiales/eliminar-peticion/" + profesosID;

        var requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()           
        }

        fetch(url, requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                window.location.reload();
            })
            .catch(err => console.log(err));
    }


    //Da el alumno al que se ha asignado la tarea
/*    const getUser = async () => {
        try {
            const url = "http://localhost:3900/api/usuarios/get-usuario/" + props.materiales.usuario
            console.log(url);
            const res = await fetch(url)
            const data = await res.json();


            setUsuarios(data.usuario.nombre);
            setCargando(false);

        } catch (error) {
            console.log(error);

        }
    }

*/

    if(cargando){
        return <CargandoProgress/>
    }else{
        const pedidos = materiales.map(mat => 
            <>
                <article>
                    Material: {mat.material.nombre}
                    Cantidad: {mat.cantidad}
                </article>
            </>
);
        //Pedidos devolverá todos los materiales pedidos (para cada uno, el material, la cantidad, si está o no realizado y el checkbox)
        return (
            <section className="materiales">
                Alumno: {alumno}
                {pedidos}   
                Realizado: No
                Recibido <input type="checkbox"></input>
                <button className="boton-eliminar"><DeleteIcon style={{cursor: "pointer"}} onClick={eliminarMateriales}/></button>

            </section>
        )
    }


}

export default MaterialPedido;

