import React from 'react';

//Componente para div de cerrar sesion
const CerrarSesionBoton = () => {
    const style = {
        position: "absolute", 
        top: "3.3%", 
        width: "20%", 
        right:"2%", 
        fontSize: "50%",  
        color: "black", 
        backgroundColor: "#F1F1F1"
    };

    return (
        //React.createElement("div", {style: {position: "absolute", top: "3.3%", width: "20%", right:"2%", fontSize: "50%",  color: "black", backgroundColor: "#F1F1F1"}}, "Cerrar Sesión")
        
        <div style={style}>
            Cerrar Sesión
        </div>
    );
}

export default CerrarSesionBoton;