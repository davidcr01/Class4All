import React, { useState } from 'react';
import { getImage } from '../../../interfaces/arasaac';
import imagenesARASAAC from "../../../img/imagenesARASAAC.json";
import { AlternateEmail } from '@mui/icons-material';

// Componente para mostrar la gestión de cantidades de los menús
// Vista: compartido

const Cantidades = ({index, currentAula, allMenus, setAllMenus}) => {

    // Imágenes/botones
    let mas = require("../../../img/mas.png")
    let menos = require("../../../img/menos.png")

// Incrementa el número asociado a dicho menú. También cambiaría la imagen ARASAAC
const incrementar = () => {
    let antes =[...allMenus];
    antes[currentAula][index] = Math.min(antes[currentAula][index] + 1, 10);
    setAllMenus(antes);
};

// Idem pero decrementar
const decrementar = () => {
    let antes = [...allMenus];
    antes[currentAula][index] = Math.max(antes[currentAula][index] - 1, 0);
    setAllMenus(antes);
};

    return  (
        <section className='cantidades'>
            <button className="boton-cantidad" onClick={decrementar}>
                <img className='botones-mas-menos' src={menos} alt="Decrementar cantidad"/>
            </button>
            <img className='imagen-cantidad' src={getImage(imagenesARASAAC['numeros'][allMenus[currentAula][index]])} alt={allMenus[currentAula][index]} />
            <button className="boton-cantidad" onClick={incrementar}>
                <img className='botones-mas-menos' src={mas} alt="Incrementar cantidad"/>
            </button>
        </section>
    )
}

export default Cantidades;