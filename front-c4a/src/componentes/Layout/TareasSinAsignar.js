import React from 'react';
import Tarea from './TareaSinAsignar';
const ListaTareas = (props) => {
    return(React.createElement(
        "div",
        { style: { width: "auto", backgroundColor: "#FFFFFF", borderColor: "black", borderStyle: "solid", display: "grid", borderWidth: "3px", fontSize: "20px", marginTop: "50px", textAlign: "center"} },
            <>
            <Tarea className="tarea"></Tarea>
            <Tarea className="tarea"></Tarea>
            <Tarea className="tarea"></Tarea>
            <Tarea className="tarea"></Tarea>
            <Tarea className="tarea"></Tarea>
            <Tarea className="tarea"></Tarea>

            </>
    )
    )

}

export default ListaTareas;