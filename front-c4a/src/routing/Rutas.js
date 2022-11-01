import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Gestion } from '../componentes/pages/Gestion';
import { GestionTareasSinAsignar } from '../componentes/pages/GestionTareasSinAsignar';
import {Inicio} from '../componentes/pages/Inicio';
import { GestionTareasAsignadas } from '../componentes/pages/GestionTareasAsignadas';

export const Rutas = () => {
    return (
        <BrowserRouter>

        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/gestion-centro" element={<Gestion />} />
            <Route path="/gestion-tareas-sa" element={<GestionTareasSinAsignar />} />
            <Route path="/gestion-tareas-a" element={<GestionTareasAsignadas />} />
            {/* <Route path="/otra-pagina" element={<OtraPagina />} /> */}
        </Routes>

        </BrowserRouter>
    );
}