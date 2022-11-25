import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CargandoProgress from '../../../compartido/Layout/CargandoProgress';

// Vista: compartida (administradores y profesores)

const MaterialPedido = (props) => {

    const [usuarios, setUsuarios] = useState('');
    const [materiales, setMaterialesPedidos] = useState('');
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        setCargando(true);
        getUser();
        getMaterialesPedidos();
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
        return (
            <div className="materiales">
                <div><label className='label-materiales'>Alumno:</label> {props.materiales.usuario.nombre}</div>
                
                <article>
                    <div><label className='label-materiales'>Material:</label> {props.materiales.material.nombre}</div>
                    <div><label className='label-materiales'>Cantidad:</label> {props.materiales.cantidad}</div>
                </article>
                

                <div><label className='label-materiales'>Realizado:</label> No</div>
                <div><label className='label-materiales'>Recibido</label> <input type="checkbox"></input></div>

                <div className="Eliminar"><DeleteIcon style={{cursor: "pointer"}} onClick={eliminarMateriales}/></div>

            </div>
        )
    }


}

export default MaterialPedido;

