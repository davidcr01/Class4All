import React from 'react';
import Tarea from './TareaSinAsignar';
class Tareas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tareas: fetch('http://localhost:3000/lista-tareasDia')
        }
    }

    render(props) {
        
        return (
            <div className="Tareas">
                {/* Get the type of one element of tareas */}
                {this.state.tareas[0].type}
                <Tarea className="tarea"></Tarea>
                <Tarea className="tarea"></Tarea>
                <Tarea className="tarea"></Tarea>
                <Tarea className="tarea"></Tarea>
                <Tarea className="tarea"></Tarea>
                <Tarea className="tarea"></Tarea>

            </div>
        )
    }
}

export default Tareas;