import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextoRol } from '../../../contexto/Roles';

import { getImage } from '../../../interfaces/arasaac';
import imagenesARASAAC from "../../../img/imagenesARASAAC.json";

// Componente para mostrar el login de los alumnos
// Vista: compartido

const Cantidades = (id) => {
    const [cantidad, setCantidad] = useState(0);

    let mas = require("../../../img/mas.png")
    let menos = require("../../../img/menos.png")

    const Incrementar = () => {
        setCantidad(cantidad => Math.min(cantidad + 1, 10));
    };

    const Decrementar = () => {
        setCantidad(cantidad => Math.max(cantidad - 1, 0));
    };

    const {setCookie} = React.useContext(ContextoRol);
    const nav = useNavigate();

    return  (
        <section className='cantidades'>
            <img className='botonesMasMenos' src={menos} onClick={Decrementar}/>
            <img className='imagenCantidad' src={getImage(imagenesARASAAC['numeros'][cantidad])}/>
            <img className='botonesMasMenos' src={mas} onClick={Incrementar}/>
        </section>
    )
}

export default Cantidades;