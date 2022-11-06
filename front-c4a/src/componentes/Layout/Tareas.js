import React from 'react';
import Tarea from './TareaSinAsignar';
class Tareas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tareas: [],
            status: ''
        }
    }


    componentDidMount() {
        fetch('http://localhost:3900/api/tareas/lista-tareasDia',
            ).then(res => res.json()).then(result => {
                this.setState({
                    tareas: result.tareas,
                    status: result.status
                })
            })
    }

    render(props) {
        return (
            <div className="Tareas">
                {this.state.status}
                {/* {this.state.tareas} */}
            
                {/* <tbody>
                    {this.state.tareas.map(tarea => {
                    <tr key={tarea._id}>
                        <td>{tarea.nombre}</td>
                        <td>{tarea.descripcion}</td>
                        <td>{tarea.tipoInstrucciones}</td>
                        <td>{tarea.instruccionTexto}</td>
                        <td>{tarea.instruccionesFotos}</td>
                        <td>{tarea.urlVideo}</td>
                        <td>{tarea.estado}</td>
                        <td>{tarea.usuarioAsignado}</td>
                        <td>{tarea.fechaAsignada}</td>
                        <td>{tarea.fechaAcabadada}</td>
                    </tr>

                    })}</tbody> */}
                {/* Get the type of one element of tareas */}
                {/* {this.state.tareas} */}
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