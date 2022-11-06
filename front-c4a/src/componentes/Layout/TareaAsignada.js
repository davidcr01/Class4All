import React from 'react';
class TareaAsignada extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tarea: this.props.tarea,
            status: '',
            user: {}
        }
        fetch('http://localhost:3900/api/usuarios/user/' + this.state.tarea.usuarioAsignado,
        ).then(res => res.json()).then(result => {
            this.state.user = result.usuario;
            this.state.status = result.status;
        })
    }

    componentDidMount() {
        //fetch para obtener el nombre del usuario
        console.log(this.state.status)
    }

    render(){


    // fetch('http://localhost:3900/api/usuarios/user/635ec987aacf23caed474c51',
    // ).then(res => res.json()).then(result => {
    //     user = result.usuario;    
    //     estado = result.status;
    //     console.log("dsf" + result.usuario);
    // })

    return (
        <div className="tarea">
            <div>Tarea: {this.state.tarea.nombre}</div>
            <div>Fecha: {this.state.tarea.fechaAsignada}</div>
            <div>Usuario: {this.state.user.nombre}</div>
            <div>Realizado: No</div>
            <div>Confirmar <input type="checkbox"></input></div>

        </div>
    )
    }
}

export default TareaAsignada;