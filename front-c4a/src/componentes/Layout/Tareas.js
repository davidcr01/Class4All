import React from 'react';
import TareaSinAsignar from './TareaSinAsignar';
import TareaAsignada from './TareaAsignada';
class Tareas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tareas: [{}],
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
                {(() => {
                    const arr = [];
                    for (let i = 0; i < this.state.tareas.length; i++) {
                        switch(this.state.tareas[i].estado) {
                            case 'sinasignar':
                                arr.push(<TareaSinAsignar key={i} className="tarea" tarea={this.state.tareas[i]} />);
                                break;
                            case 'asignada':
                                arr.push(<TareaAsignada key={i} className="tarea" tarea={this.state.tareas[i]} />);
                                break;
                            case 'acabada':
                                arr.push(<TareaAsignada key={i} className="tarea" tarea={this.state.tareas[i]} />);
                                break;
                            default:
                                arr.push(<TareaAsignada key={i} className="tarea" tarea={this.state.tareas[i]} />);

                        }}
                        return arr;
                        })()}
                {this.state.status}
                {this.state.tareas[0].nombre}

                
                
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
                {/* <Tarea className="tarea"></Tarea>
                <Tarea className="tarea"></Tarea>
                <Tarea className="tarea"></Tarea>
                <Tarea className="tarea"></Tarea>
                <Tarea className="tarea"></Tarea>
                <Tarea className="tarea"></Tarea> */}

            </div>
        )
    }
}

export default Tareas;