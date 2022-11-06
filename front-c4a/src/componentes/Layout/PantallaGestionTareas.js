import React from 'react';
import '../../styles.css';
import BuscarFiltros from './BuscarFiltros';
import ListaTareas from './ListaTareas'; 
class PantallaGestionTareas extends React.Component {
    render(props) {
    return(
    <div className='PantallaGestionTareas'>
        <BuscarFiltros/>
        
        <ListaTareas tipo={this.props.tipo} />
    </div>
    );
    }

}

export default PantallaGestionTareas;