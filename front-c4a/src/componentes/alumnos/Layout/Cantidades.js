import React, { useState } from 'react';
import { getImage } from '../../../interfaces/arasaac';
import imagenesARASAAC from "../../../img/imagenesARASAAC.json";
import { AlternateEmail } from '@mui/icons-material';

// Componente para mostrar el login de los alumnos
// Vista: compartido

const Cantidades = ({/*cantidades,setCantidades,*/index, currentAula, allMenus, setAllMenus}) => {

    let mas = require("../../../img/mas.png")
    let menos = require("../../../img/menos.png")
/*
    const incrementar = () => {
        let antes =[...cantidades];
        antes[index] = Math.min(antes[index] + 1, 10);
        setCantidades(antes);
        //cantidades = antes;
        alert(cantidades);
    };

    const decrementar = () => {
        let antes =[...cantidades];
        antes[index] = Math.max(antes[index] - 1, 0);
        setCantidades(antes);
        //cantidades = antes;
        alert(cantidades)
    };
*/

const incrementar = () => {
    let antes =[...allMenus];
    antes[currentAula][index] = Math.min(antes[currentAula][index] + 1, 10);
    setAllMenus(antes);
    //cantidades = antes;
    //alert(allMenus);
};

const decrementar = () => {
    let antes = [...allMenus];
    //alert("antes: "+JSON.stringify(antes[currentAula][index]));
    antes[currentAula][index] = Math.max(antes[currentAula][index] - 1, 0);
    //alert("despues: "+JSON.stringify(antes));
    setAllMenus(antes);
    //cantidades = antes;
    //alert(allMenus)
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