import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Gestion } from '../componentes/pages/Gestion';
import { GestionTareas } from '../componentes/pages/GestionTareas';
import {Inicio} from '../componentes/pages/Inicio';
import { PaginaPrincipal} from '../componentes/pages/PaginaPrincipal';
import { SesionAlumnosClases} from '../componentes/pages/SesionAlumnosClases';
import { SesionAlumnos} from '../componentes/pages/SesionAlumnos';
import { GestionUsuarios} from '../componentes/pages/GestionUsuarios';
import { SesionProfesores } from '../componentes/pages/SesionProfesores';
export const Rutas = () => {
    return (
        <BrowserRouter>

        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/gestion-centro" element={<Gestion />} />
            <Route path="/gestion-tareas" element={<GestionTareas />} />
            <Route path="/pagina-principal" element={<PaginaPrincipal/>} />
            <Route path="/gestion-usuarios" element={<GestionUsuarios/>} />
            <Route path="/sesion-alumnos-clases" element={<SesionAlumnosClases/>} />
            <Route path="/sesion-alumnos" element={<SesionAlumnos/>} />
            <Route path="/sesion-profesores" element={<SesionProfesores/>} />
            {/* <Route path="/otra-pagina" element={<OtraPagina />} /> */}
        </Routes>

        </BrowserRouter>
    );
}