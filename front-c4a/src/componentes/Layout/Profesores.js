import React from 'react';
import img from "../../img/agenda.png"

const Profesores = (props) => {
    let prueba=[];

    const style = {
        width: "50%",
        backgroundColor: "#E2E2E2", 
        borderColor: "black", 
        borderStyle: "solid", 
        borderWidth: "3px", 
        marginBottom: "5px", 
        fontSize: "2vw", 
        /*textAlign:"center", podriamos descomentar este y comentar el estilo del form*/
        padding: "3vw 0",
    };

    const style2 = {
        width:"100%", 
        height: "auto",
        paddingTop:"15px", 
        paddingBottom:"15px", 
        justifyContent: "center", 
        display: "flex", 
        marginRight:"auto", 
        marginLeft:"auto",
    };

    const formulario = {
        marginLeft:"5%",
    };

    prueba.push(
        <div style={style}>
            <form style={formulario}>
                <label for="fname">Usuario:</label><br/>
                <input type="text" id="fname" name="fname"></input><br/><br/>
                <label for="fname">Contraseña:</label><br/>
                <input type="text" id="fname" name="fname"></input>
                <p>¿Ha olvidado su contraseña?</p>
                <input type="submit" value="Entrar"></input>
            </form>
        </div>
            
    );

    return (
        <div style={style2}>
            {prueba}
        </div>
    );

}

export default Profesores;