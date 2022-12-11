
import React from 'react';

function setTams(newTam) {
    console.log("nt:" + newTam);
    let tammediano = 2.5, tampequeño = 1.75;
    if (newTam === 1) {
        tammediano = 1.5;
        tampequeño = 1;
    }
    else if (newTam === 2) {
        tammediano = 2.5;
        tampequeño = 1.75;
    }
    else {
        tammediano = 3.5;
        tampequeño = 2.5;
    }
    document.documentElement.style.setProperty('--tam-letra-mediana', tammediano + 'vw');
    document.documentElement.style.setProperty('--tam-letra-pequena', tampequeño + 'vw');
}


export default setTams;