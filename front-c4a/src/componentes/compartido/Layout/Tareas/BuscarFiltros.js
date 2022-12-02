import React from 'react';
import '../../styles.css';

// Componente para buscar filtros en la gestión de las tareas
// Vista: compartido (admins y profes)
const BuscarFiltros = ({childToParent}) => {
    const data = 0;

    const aplicarFiltro = (n, e) => {
        console.log(n);
        childToParent(n);

    }



    return (
        <div className="divfiltros">
            <div className="divfiltrosinline">
                <label className="buscarlabel">BUSCAR
                    <input className="filtrotexto" type="text" /></label>
                <div className='Filtros'>Filtros:</div>
                <div className="checkboxs">
                    <label htmlFor="a" className="checkbox"><input type="checkbox" id="1" onClick={e => aplicarFiltro(1,e)} defaultChecked/>Alumnos</label>
                    <label htmlFor="b" className="checkbox"><input type="checkbox" id="2" onClick={e => aplicarFiltro(2,e)} defaultChecked/>Administradores</label>
                    <label htmlFor="c" className="checkbox"><input type="checkbox" id="3" onClick={e => aplicarFiltro(3,e)} defaultChecked/>Profesores</label>
                </div>
            </div>
        </div>
    )

}

export default BuscarFiltros;