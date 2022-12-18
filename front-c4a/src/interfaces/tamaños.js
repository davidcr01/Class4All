
import React from 'react';

export const setTamsLetra = (newTam) => {
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


export const setTamsIconos = (newTam) =>  {
    console.log("nt:" + newTam);
    let tam = 4.5, tam2 = 3.5;
    if (newTam === 1) {
        tam = 3;
        tam2 = 4;
    }
    else if (newTam === 2) {
        tam = 4.5;
        tam2 = 4.75;
    }
    else {
        tam = 6;
        tam2 = 5.25;
    }
    document.documentElement.style.setProperty('--tam-icono-a', tam + 'em');
    document.documentElement.style.setProperty('--tam-icono-b', tam2 + 'em');

}


export default {setTamsLetra, setTamsIconos};