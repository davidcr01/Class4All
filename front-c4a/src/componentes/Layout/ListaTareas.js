import React from 'react';
import Tareas from './TareasSinAsignar.js';
const ListaTareas = (props) => {
    return(React.createElement(
        "div",
        { style: { width: "auto", backgroundColor: "#FFFFFF", borderColor: "black", borderStyle: "solid", display: "grid", borderWidth: "3px", fontSize: "20px", textAlign: "center"} },
            <><div className="botones">
                <div className="boton">SIN ASIGNAR</div>
                <div className="boton">ASIGNADAS</div>
                <div className="boton">REALIZADAS</div>
                <div className="boton">NO REALIZADAS</div>

            </div>
            <Tareas/>
            
            </>
    )
    )

}

export default ListaTareas;