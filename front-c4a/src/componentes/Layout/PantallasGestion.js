import React from 'react';

const PantallasGestion = (props) => {
    let prueba=[];
    let apartados = ["Gestión de usuario", "Gestión de Tareas", "Gestión de Menús", "Comandas", "Stock", "Chat"]

    const style = {
        width: "auto", 
        backgroundColor: "#E2E2E2", 
        borderColor: "black", 
        borderStyle: "solid", 
        borderWidth: "3px", 
        display: "grid", 
        marginBottom: "5px", 
        fontSize: "4vw", 
        textAlign:"center", 
        padding: "6vw 0"
    };
    
    /*for(let i=0; i< 6; i++){
        prueba.push(
            React.createElement(
                        "div",
                        { style: {width: "auto", backgroundColor: "#E2E2E2", borderColor: "black", borderStyle: "solid", borderWidth: "3px", display: "grid", marginBottom: "5px", fontSize: "4vw", textAlign:"center", padding: "6vw 0"} },
                        // React.createElement(
                        //     "img",
                        //     { src: "https://img.asmedia.epimg.net/resizer/K8BK0UV3TAYniv5tW3DCKnG6nno=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/D56EEJ2ZXBIOFGPHEYLA4AXHVI.jpg" },
                        //     )
                        apartados[i]
                        ));
    }
    return (
        React.createElement("div", {style: {width:"100%", paddingTop:"15px", paddingBottom:"15px", justifyContent: "center", display: "grid", marginRight:"auto", marginLeft:"auto", gridTemplateColumns: "40% 40%", gridTemplateRows:"18vw 18vw 18vw", gridColumnGap: "20px", gridRowGap: "15px"}}, prueba)
    );
    */
    for(let i=0; i< 6; i++){
        prueba.push(
        <div style={style}>
            {apartados[i]}
        </div>
        );
    }

    const style2 = {
        width:"100%", 
        paddingTop:"15px", 
        paddingBottom:"15px", 
        justifyContent: "center", 
        display: "grid", 
        marginRight:"auto", 
        marginLeft:"auto", 
        gridTemplateColumns: "40% 40%", 
        gridTemplateRows:"18vw 18vw 18vw", 
        gridColumnGap: "20px", 
        gridRowGap: "15px"
    };

    return(
        <div style={style2}>
            {prueba}
        </div>
    );

}

export default PantallasGestion;