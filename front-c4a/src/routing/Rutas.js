import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Gestion } from '../componentes/pages/Gestion';
import {Inicio} from '../componentes/pages/Inicio';


export const Rutas = () => {
    return (
        <BrowserRouter>

        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/gestion-centro" element={<Gestion />} />
            
            {/* <Route path="/otra-pagina" element={<OtraPagina />} /> */}
        </Routes>

        </BrowserRouter>
    );
}