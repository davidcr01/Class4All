import React from 'react';

const Header = (props) => {
    return (
        React.createElement(
            "h1",
            { style: { fontSize: "50px",  color: "#0099D7", backgroundColor: "#E2E2E2", textAlign: "center"} },
            props.titulo
            //"div",
            //null, 
            //"Hola, Andrés vas a suspender"
            )
    );
}

export default Header;