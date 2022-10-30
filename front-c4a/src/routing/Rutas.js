import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Inicio }  from './componentes/pages/Inicio';
import { OtraPagina }  from './componentes/pages/OtraPagina';

export const Rutas = () => {
    return (
        <BrowserRouter>

        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/otra-pagina" element={<OtraPagina />} />
        </Routes>

        </BrowserRouter>
    );
}