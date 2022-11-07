import React from 'react';
import Tareas from './Tareas.js';
import '../../styles.css';
const ListaTareas = (props) => {

        function seleccionSinAg(){
            //getelementbyid
            document.getElementById('sa').style.backgroundColor = 'red';
            props.cambio("sinasignar")
        }

        return (
            <div className='ListaTareas'>
                <div className="botones">
                    <div className="boton" id="sa" onClick={seleccionSinAg}>SIN ASIGNAR</div>
                    <div className="boton">ASIGNADAS</div>
                    <div className="boton">REALIZADAS</div>
                    <div className="boton">NO REALIZADAS</div>
                </div>
                <Tareas tipo={props.tipo}/>
            </div>

        )


}

export default ListaTareas;