import React from 'react';
import TareaSinAsignar from './TareaSinAsignar';
import TareaAsignada from './TareaAsignada';
import TareaRealizada from './TareaRealizada';
import TareaNoRealizada from './TareaNoRealizada';
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
                            case 'realizada':
                                arr.push(<TareaRealizada key={i} className="tarea" tarea={this.state.tareas[i]} />);
                                break;
                            case 'norealizada':
                                    arr.push(<TareaNoRealizada key={i} className="tarea" tarea={this.state.tareas[i]} />);
                                    break;
                            default:
                                arr.push(<TareaNoRealizada key={i} className="tarea" tarea={this.state.tareas[i]} />);

                        }}
                        return arr;
                        })()}
                {this.state.status}
                {this.state.tareas[0].nombre}

                

            </div>
        )
    }
}

export default Tareas;