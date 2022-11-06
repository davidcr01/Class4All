import React from 'react';
const TareaSinAsignar = (props) => {
    return(React.createElement(
        "div",
        {className: "tarea"},
        <> <div>Tarea: Poner microhondas</div>
        <div>Fecha: 15/09/22</div>
        <div>Usuario: <select/></div>
        </>
    )
    )

}

export default TareaSinAsignar;