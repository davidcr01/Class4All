
import React from 'react';

function setTamsLetra(newTam) {
    console.log("nt:" + newTam);
    let tammediano = 2.5, tampequeño = 1.75, tamgrande = 3;
    if (newTam === 1) {
        tammediano = 1.5;
        tampequeño = 1;
        tamgrande = 2;
    }
    else if (newTam === 2) {
        tammediano = 2.5;
        tampequeño = 1.75;
        tamgrande = 3
    }
    else {
        tammediano = 3.5;
        tampequeño = 2.5;
        tamgrande = 4;
    }
    document.documentElement.style.setProperty('--tam-letra-mediana', tammediano + 'vw');
    document.documentElement.style.setProperty('--tam-letra-pequena', tampequeño + 'vw');
    document.documentElement.style.setProperty('--tam-letra-grande', tamgrande + 'vw');
}


function setTamsIconos(newTam) {
    console.log("nt:" + newTam);
    let tammediano = 2.5, tampequeño = 1.75, tamgrande = 3;
    if (newTam === 1) {
        tammediano = 1.5;
        tampequeño = 1;
        tamgrande = 2;
    }
    else if (newTam === 2) {
        tammediano = 2.5;
        tampequeño = 1.75;
        tamgrande = 3
    }
    else {
        tammediano = 3.5;
        tampequeño = 2.5;
        tamgrande = 4;
    }
    document.documentElement.style.setProperty('--tam-icono-mediano', tammediano + 'vw');
    document.documentElement.style.setProperty('--tam-icono-pequeno', tampequeño + 'vw');
    document.documentElement.style.setProperty('--tam-icono-grande', tamgrande + 'vw');
}


export default {setTamsLetra, setTamsIconos};