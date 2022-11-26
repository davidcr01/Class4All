import React, { useEffect, useState } from 'react';
import PedirMaterial from './PedirMaterial';
import MaterialPedido from './MaterialPedido';
import CargandoProgress from '../../../compartido/Layout/CargandoProgress';
import { getListSubheaderUtilityClass } from '@mui/material';

// Vista: compartida (administradores y profesores)

export const Materiales = ({usuario}) => {

    const [materialesPedidos, SetMaterialesPedidos] = useState([]);
    const [pedido, SetPedido] = useState([]);

    useEffect(() => {
        getPedido();
    }, []);

    //PETICIÓN A LA BASE DE DATOS QUE PASANDO EL ID DEL PROFESOR DIGA SI HA HECHO PETICIÓN DE MATERIAL O NO
    //ESTO SE HACE CON LAS COOCKIES
    const getPedido = async() => {
        try {
            const url = "http://localhost:3900/api/tareas/lista-tareasDia-prof/" + usuario._id;
            const res = await fetch(url);
            const materialesPedidos = await res.json();
            
            SetPedido(1);
            SetMaterialesPedidos(materialesPedidos)
        } catch {
            SetPedido(0);
        }
    }

    //Aquí que se haga como un if para comprobar si hay o no materialesPedidos, y si los hay que se haga
    //lo de MaterialPedido y si no lo del otro
    return (
        <section>
            {pedido === 1 && 
                <MaterialPedido className="materiales" alumno ={materialesPedidos.usuario} materiales={materialesPedidos.materiales}/>
            }
            {pedido === 0 && 
                <PedirMaterial />
            }
        </section>

    )

}

export default Materiales;