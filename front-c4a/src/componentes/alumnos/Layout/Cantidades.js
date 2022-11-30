import React, { useState } from 'react';
import { getImage } from '../../../interfaces/arasaac';
import imagenesARASAAC from "../../../img/imagenesARASAAC.json";

// Componente para mostrar el login de los alumnos
// Vista: compartido

const Cantidades = ({cantidades,setCantidades,index}) => {

    let mas = require("../../../img/mas.png")
    let menos = require("../../../img/menos.png")

    const incrementar = () => {
        let antes =[...cantidades];
        antes[index] = Math.min(antes[index] + 1, 10);
        setCantidades(antes);
    };

    const decrementar = () => {
        let antes =[...cantidades];
        antes[index] = Math.max(antes[index] - 1, 0);
        setCantidades(antes);
    };

    return  (
        <section className='cantidades'>
            <button className="boton-cantidad" onClick={decrementar}>
                <img className='botones-mas-menos' src={menos} alt="Decrementar cantidad"/>
            </button>
            <img className='imagen-cantidad' src={getImage(imagenesARASAAC['numeros'][cantidades[index]])} alt={cantidades[index]} />
            <button className="boton-cantidad" onClick={incrementar}>
                <img className='botones-mas-menos' src={mas} alt="Incrementar cantidad"/>
            </button>
        </section>
    )
}

export default Cantidades;