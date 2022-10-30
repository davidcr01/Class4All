import React from 'react';

//Componente para div de cerrar sesion
const CerrarSesionBoton = () => {
    return (
        React.createElement("div", {style: {position: "absolute", top: "3.3%", width: "20%", right:"2%", fontSize: "50%",  color: "black", backgroundColor: "#F1F1F1"}}, "Cerrar Sesión")
    );
}

export default CerrarSesionBoton;