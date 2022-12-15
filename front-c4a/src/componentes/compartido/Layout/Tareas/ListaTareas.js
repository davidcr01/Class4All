import React, { useState } from 'react';
import Tareas from './Tareas.js';
import '../../styles.css';

// Vista: profesores y admins
// Componente para mostrar la lista de todas las tareas y sus categorías

const ListaTareas = (props) => {
/*
    const [SA, setSA] = useState(false);
    const [A, setA] = useState(true);
    const [R, setR] = useState(false);
    const [NR, setNR] = useState(false);
*/

    let SA = false, A = true, R = false, NR = false;

    const setSA = (val) => {SA = val}
    const setA = (val) => {A = val}
    const setR = (val) => {R = val}
    const setNR = (val) => {NR = val}

    // Las siguientes funciones son cambios en los estilos cuando
    // se seleccionan las diferentes categorías

    function seleccionSinAs() {
        //getelementbyid
        if (!SA) {
            document.getElementById('sa').style.backgroundColor = '#E2E2E2';
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
            document.getElementById('as').style.backgroundColor = '#E2E2E2';

        }
    }

    function seleccionAs() {
        //getelementbyid
        document.getElementById('as').style.backgroundColor = '#E2E2E2';
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
            document.getElementById('re').style.backgroundColor = '#E2E2E2';
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
            document.getElementById('as').style.backgroundColor = '#E2E2E2';

        }
    }

    function seleccionNoReal() {
        if (!NR) {
            document.getElementById('nr').style.backgroundColor = '#E2E2E2';
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

            props.cambio("asignada");
            setR(false);
            setA(true);
            setSA(false);
            setNR(false);


            document.getElementById('as').style.backgroundColor = '#E2E2E2';

        }
    }

    return (
        <div className='ListaTareas'>
            <div className="botones">
                <button className="boton" id="sa" onClick={seleccionSinAs}>SIN ASIGNAR</button>
                <button className="boton" id="as" style={{backgroundColor: "#E2E2E2"}} onClick={seleccionAs}>ASIGNADAS</button>
                <button className="boton" id="re" onClick={seleccionReal}>REALIZADAS</button>
                <button className="boton" id="nr" onClick={seleccionNoReal}>NO REALIZADAS</button>
            </div>
            <Tareas tipo={props.tipo} />
        </div>

    )


}

export default ListaTareas;