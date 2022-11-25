
import React from 'react';
import '../styles.css';
import {useNavigate} from 'react-router-dom';

// Animación de carga
// Vista: compartido


const BotonParaAtras = (props) => {

    const nav = useNavigate();

    return (
        <button onClick={() => nav(props.url)} className="botonParaAtras"><img className="atras" src={require("../../../img/flechaatras.png")} /></button>
    )
};

export default BotonParaAtras;