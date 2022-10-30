import React from 'react';

const PantallasGestion = (props) => {
    let prueba=[];
    let apartados = ["Gestión de usuario", "Gestión de Tareas", "Gestión de Menús", "Comandas", "Stock", "Chat"]
    for(let i=0; i< 6; i++){
        prueba.push(
            React.createElement(
                        "div",
                        { style: {width: "auto", backgroundColor: "#E2E2E2", borderColor: "black", borderStyle: "solid", borderWidth: "3px", display: "grid", marginBottom: "5px", fontSize: "40px", textAlign:"center", padding: "50px 0"} },
                        // React.createElement(
                        //     "img",
                        //     { src: "https://img.asmedia.epimg.net/resizer/K8BK0UV3TAYniv5tW3DCKnG6nno=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/D56EEJ2ZXBIOFGPHEYLA4AXHVI.jpg" },
                        //     )
                        apartados[i]
                        ));
    }
    return (
        React.createElement("div", {style: {width:"100%", paddingTop:"15px", paddingBottom:"15px", justifyContent: "center", display: "grid", marginRight:"auto", marginLeft:"auto", gridTemplateColumns: "40% 40%", gridTemplateRows:"150px 150px 150px", gridColumnGap: "20px", gridRowGap: "15px"}}, prueba)
    );
}

export default PantallasGestion;