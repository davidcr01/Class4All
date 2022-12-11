
import React from 'react';

function setTams(newTam) {
    console.log("nt:" + newTam);
    let tammediano = 2.5;
    if (newTam === 1) {
        tammediano = 1.5;
        
    }
    else if (newTam === 2) {
        tammediano = 2.5;
    }
    else {
        tammediano = 3.5;
    }
    document.documentElement.style.setProperty('--tam-letra-mediana', tammediano + 'vw');
}


export default setTams;