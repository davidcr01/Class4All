import React from 'react';
const BuscarFiltros = (props) => {
    return(React.createElement(
        "div",
        { style: { width: "auto", backgroundColor: "#FFFFFF", borderColor: "black", borderStyle: "solid", display: "grid", borderWidth: "3px", fontSize: "4vw", textAlign: "center", padding: "6vw 0" } },
            <><label>"BUSCAR"</label><input type="text"/>
            <div className='Filtros'>Filtros:</div>
            <label htmlFor="a" className="checkbox"><input type="checkbox" id="a"/>OPCION A</label>
            <label htmlFor="b" className="checkbox"><input type="checkbox" id="b"/>OPCION B</label>
            <label htmlFor="c" className="checkbox"><input type="checkbox" id="c"/>OPCION C</label>
            </>
    )
    )

}

export default BuscarFiltros;