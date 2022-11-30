import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextoRol } from '../../../contexto/Roles';

import { getImage } from '../../../interfaces/arasaac';
import imagenesARASAAC from "../../../img/imagenesARASAAC.json";

// Componente para mostrar el login de los alumnos
// Vista: compartido

const Cantidades = ({cantidades,setCantidades,index}) => {

    let mas = require("../../../img/mas.png")
    let menos = require("../../../img/menos.png")

    const Incrementar = () => {
        let antes =[...cantidades];
        antes[index] = Math.min(antes[index] + 1, 10);
        setCantidades(antes);
    };

    const Decrementar = () => {
        let antes =[...cantidades];
        antes[index] = Math.max(antes[index] - 1, 0);
        setCantidades(antes);
    };

    const {setCookie} = React.useContext(ContextoRol);
    const nav = useNavigate();

    console.log(cantidades);

    //"numeros": {
    //    "0": 6972,
    // cantidades[0] -> undefined
    return  (
        <section className='cantidades'>
            <img className='botonesMasMenos' src={menos} onClick={Decrementar}/>
            <img className='imagenCantidad' src={getImage(imagenesARASAAC['numeros'][cantidades[index]])} />
            <img className='botonesMasMenos' src={mas} onClick={Incrementar}/>
        </section>
    )
}

export default Cantidades;