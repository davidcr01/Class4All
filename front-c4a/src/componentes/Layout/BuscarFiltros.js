import React from 'react';
import '../../styles.css';
const BuscarFiltros = (props) => {

    return (
        <div className="divfiltros">
            <div className="divfiltrosinline">
                <label className="buscarlabel">BUSCAR
                    <input className="filtrotexto" type="text" /></label>
                <div className='Filtros'>Filtros:</div>
                <div class="checkboxs"><label htmlFor="a" className="checkbox"><input type="checkbox" id="a" />OPCION A</label>
                    <label htmlFor="b" className="checkbox"><input type="checkbox" id="b" />OPCION B</label>
                    <label htmlFor="c" className="checkbox"><input type="checkbox" id="c" />OPCION C</label>
                </div></div>
        </div>
    )

}

export default BuscarFiltros;