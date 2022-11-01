import React from 'react';
import BuscarFiltros from './BuscarFiltros';
import ListaTareas from './ListaTareas'; 
const PantallaGestionTareas = (props) => {
    return(React.createElement(
        "div",
        { style: { justifyContent:"center", width: "auto", gridTemplateColumns: "22% 76%", gridColumnGap: "20px" ,borderWidth: "3px", display: "grid", marginBottom: "2px", fontSize: "4vw", textAlign: "center" } },
            <><BuscarFiltros/><ListaTareas/></>
    )
    )

}

export default PantallaGestionTareas;