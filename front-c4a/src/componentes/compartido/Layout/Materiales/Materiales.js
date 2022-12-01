import React, { useEffect, useState } from 'react';
import Header from '../../Layout/Header.js';
import Footer from '../../Layout/Footer.js';
import { MuiBreadcrumbsPM } from '../../../muibreadcrumbs';
import {PedirMaterial} from './PedirMaterial';
import MaterialPedido from './MaterialPedido';
import CargandoProgress from '../../../compartido/Layout/CargandoProgress';
import { getListSubheaderUtilityClass } from '@mui/material';
import Cookies from 'universal-cookie';

// Vista: compartida (administradores y profesores)

export const Materiales = () => {

    const [materialesPedidos, SetMaterialesPedidos] = useState([]);
    const [pedido, SetPedido] = useState(0);

    const cookies = new Cookies();

    useEffect(() => {
        getPedido();
    }, []);

    //PETICIÓN A LA BASE DE DATOS QUE PASANDO EL ID DEL PROFESOR DIGA SI HA HECHO PETICIÓN DE MATERIAL O NO
    //ESTO SE HACE CON LAS COOCKIES
    
    const tareaID = null;

    const getPedido = async() => {
        try {
            const url = "http://localhost:3900/api/tareas/lista-tareasDia-prof/" + cookies.get('loginCookie').id;
            const res = await fetch(url);
            const materialesPedidos = await res.json();
            
            if(materialesPedidos.tareas.length > 0){
                SetPedido(1);
                tareaID=materialesPedidos.tareas[0];
            }
            else{
                SetPedido(0);
            }
            SetMaterialesPedidos(materialesPedidos)
        } catch {
            //SetPedido(0);
        }
    }
    

    //Aquí que se haga como un if para comprobar si hay o no materialesPedidos, y si los hay que se haga
    //lo de MaterialPedido y si no lo del otro
    return (
        <section>
            <Header titulo="Pedir Materiales" />
            {pedido === 1 && 
            <>
                <MuiBreadcrumbsPM tipo = "Material Pedido" />
                <MaterialPedido className="materiales" 
                    profesorID = {cookies.get('loginCookie').id} 
                    alumno ={materialesPedidos.usuarioAsignado} 
                    materiales={materialesPedidos.materiales}
                    tareaID = {tareaID}
                /> 
            </>
            }
            {pedido === 0 && 
            <>
                <MuiBreadcrumbsPM tipo ="Pedir Material"/>
                <PedirMaterial />
            </>
            }
            <Footer />

        </section>

    )

}

export default Materiales;