import React, { useState } from 'react';
import Tareas from './Tareas.js';
import '../../styles.css';

// Vista: profesores y admins

const ListaTareas = (props) => {

    const [SA, setSA] = useState(false);
    const [A, setA] = useState(true);
    const [R, setR] = useState(false);
    const [NR, setNR] = useState(false);


    function seleccionSinAs() {
        //getelementbyid
        if (!SA) {
            document.getElementById('sa').style.backgroundColor = '#70b67c';
            props.cambio("sinAsignar")
            setSA(true);
            setA(false);
            setR(false);
            setNR(false);

            document.getElementById('as').style.backgroundColor = null;
            document.getElementById('re').style.backgroundColor = null;
            document.getElementById('nr').style.backgroundColor = null;
        }
        else {
            document.getElementById('sa').style.backgroundColor = null;
            props.cambio("asignada")
            setSA(false);
            setA(true);
            setR(false);
            setNR(false);
            document.getElementById('as').style.backgroundColor = '#70b67c';

        }
    }

    function seleccionAs() {
        //getelementbyid
        document.getElementById('as').style.backgroundColor = '#70b67c';
        props.cambio("asignada")
        setA(true);
        setSA(false);
        setR(false);
        setNR(false);

        document.getElementById('sa').style.backgroundColor = null;
        document.getElementById('re').style.backgroundColor = null;
        document.getElementById('nr').style.backgroundColor = null;
    }

    function seleccionReal() {
        //getelementbyid
        if (!R) {
            document.getElementById('re').style.backgroundColor = '#70b67c';
            props.cambio("completada")
            setR(true);
            setA(false);
            setSA(false);
            setNR(false);

            document.getElementById('as').style.backgroundColor = null;
            document.getElementById('sa').style.backgroundColor = null;
            document.getElementById('nr').style.backgroundColor = null;
        }
        else {
            document.getElementById('re').style.backgroundColor = null;
            props.cambio("completada")
            setR(false);
            setA(true);
            setSA(false);
            setNR(false);
            document.getElementById('as').style.backgroundColor = '#70b67c';

        }
    }

    function seleccionNoReal() {
        if (!NR) {
            document.getElementById('nr').style.backgroundColor = '#70b67c';
            props.cambio("cancelada")
            setR(false);
            setA(false);
            setSA(false);
            setNR(true);

            document.getElementById('sa').style.backgroundColor = null;
            document.getElementById('re').style.backgroundColor = null;
            document.getElementById('as').style.backgroundColor = null;
        }
        else {
            document.getElementById('nr').style.backgroundColor = null;

            props.cambio("asignada")
            setR(false);
            setA(true);
            setSA(false);
            setNR(false);


            document.getElementById('as').style.backgroundColor = '70b67c';

        }
    }

    return (
        <div className='ListaTareas'>
            <div className="botones">
                <button className="boton" id="sa" onClick={seleccionSinAs}>SIN ASIGNAR</button>
                <button className="boton" id="as" style={{backgroundColor: "#70b67c"}} onClick={seleccionAs}>ASIGNADAS</button>
                <button className="boton" id="re" onClick={seleccionReal}>REALIZADAS</button>
                <button className="boton" id="nr" onClick={seleccionNoReal}>NO REALIZADAS</button>
            </div>
            <Tareas tipo={props.tipo} />
        </div>

    )


}

export default ListaTareas;