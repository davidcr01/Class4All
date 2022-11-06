import React from 'react';
import Tareas from './Tareas.js';
import '../../styles.css';
class ListaTareas extends React.Component {
    render(props) {
        return (
            <div className='ListaTareas'>
                <div className="botones">
                    <div className="boton">SIN ASIGNAR</div>
                    <div className="boton">ASIGNADAS</div>
                    <div className="boton">REALIZADAS</div>
                    <div className="boton">NO REALIZADAS</div>
                </div>
                <Tareas tipo={this.props.tipo}/>
            </div>
        )
    }

}

export default ListaTareas;