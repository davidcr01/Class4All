import React, { useEffect, useState } from 'react';
import Header from '../../Layout/Header.js';
import Footer from '../../Layout/Footer.js';
import { MuiBreadcrumbsPM } from '../../../muibreadcrumbs';
import {PedirMaterial} from './PedirMaterial';
import MaterialPedido from './MaterialPedido';
import Cookies from 'universal-cookie';

// Vista: compartida (administradores y profesores)
// Componente padre para pedir materiales, dentro se renderiza
// la información del pedido o su formulario para pedirlo

export const Materiales = () => {

    const [materialesPedidos, SetMaterialesPedidos] = useState([]);
    const [pedido, SetPedido] = useState(0);
    const [cambio, setCambio] = useState(0);

    const cookies = new Cookies();

    useEffect(() => {
        getPedido();

    }, []);

    useEffect(() => {
        getPedido();
    }, [cambio]);
    
    // Obtiene si el profesor ya ha hecho un pedido
    const getPedido = async() => {
        try {
            const url = "http://localhost:3900/api/tareas/lista-tareasDia-prof/" + cookies.get('loginCookie').id;
            const res = await fetch(url);
            const pedido = await res.json();
            SetMaterialesPedidos(pedido.tareas[0]);

            if(pedido.tareas.length > 0){
                SetPedido(1);
            }
            else{
                SetPedido(0);
            }
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
                    materiales={materialesPedidos.entregamateriales.materiales}
                    tareaID = {materialesPedidos._id}
                    setCambio = {setCambio}
                    faltan = {materialesPedidos.entregamateriales.materialesnodisp}

                /> 
            </>
            }
            {pedido === 0 && 
            <>
                <MuiBreadcrumbsPM tipo ="Pedir Material"/>
                <PedirMaterial setCambio={setCambio}/>
            </>
            }
            <Footer />

        </section>

    )

}

export default Materiales;