import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CargandoProgress from '../../../compartido/Layout/CargandoProgress';
import { ListItem } from '@mui/material';

// Vista: compartida (administradores y profesores)

const MaterialPedido = (props) => {

    const [usuario, setUsuarios] = useState('');
 //   const [materiales, setMaterialesPedidos] = useState('');
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        setCargando(true);
        getUser();
  //      getMaterialesPedidos();
    }, []);

    
    const eliminarMateriales = (event) => {
        event.preventDefault();
        const url = "http://localhost:3900/api/materiales/eliminar-peticion/" + props.materiales._id;

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
    const getUser = async () => {
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
/*
    const getMaterialesPedidos = async () => {
        try {
            const url = "http://localhost:3900/api/materiales/get-materiales/" + props.materialesPedidos.MaterialPedido
            console.log(url);
            const res = await fetch(url)
            const data = await res.json();


            setMaterialesPedidos({data.materiales.map(m => {
                {m.estado === props.tipo && m.estado === "pedido" && (
                    <MaterialesPedidos key={m._id} className="material" usuarios={usuarios} material={m} />
                )}
            }));
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
                Realizado: No
                Recibido <input type="checkbox"></input>
            </>
        );

        return (
            <section className="materiales">
                Alumno: {usuario}
                {pedidos}
                <button className="Eliminar"><DeleteIcon style={{cursor: "pointer"}} onClick={eliminarMateriales}/></button>

            </section>
        )
    }


}

export default MaterialPedido;

