import React, { useEffect, useState } from 'react';
import PedirMaterial from './PedirMaterial';
import MaterialPedido from './MaterialPedido';
import CargandoProgress from '../../../compartido/Layout/CargandoProgress';
import { getListSubheaderUtilityClass } from '@mui/material';

// Vista: compartida (administradores y profesores)

export const Tareas = (props) => {
    
    const [materiales, SetMateriales] =  useState([]);
    const [usuarios, SetUsuarios] = useState([]);

    useEffect(() => {
        getMateriales();
        getUsuarios();
    }, []);

    const getMateriales = async() =>{
        try {
            const url = "http://localhost:3900/api/materiales/lista-materiales";

            const res = await fetch(url)
            const data = await res.json();
            SetMateriales(data.materiales);
        } catch (error) {
            console.log(error);
        }
    }

    const getUsuarios = async() =>{
        try {
            const url = "http://localhost:3900/api/usuarios/lista-usuarios";

            const res = await fetch(url)
            const data = await res.json();
            SetUsuarios(data.usuarios);
        } catch (error) {
            console.log(error);
        }
    }


    //Aquí que se haga como un if para comprobar si hay o no materialesPedidos, y si los hay que se haga
    //lo de MaterialPedido y si no lo del otro
    return (
        <section>
           {materialesPedidos != null && materialesPedidos.length !== 0 ?
                {}
                : <CargandoProgress/>  
            }
        </section>

    )

}

export default Materiales;