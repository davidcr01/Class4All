import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { SesionAlumnosClases} from '../componentes/compartido/pages/SesionAlumnosClases';
import { SesionAlumnos} from '../componentes/alumnos/pages/SesionAlumnos';
import { SesionProfesores } from '../componentes/compartido/pages/SesionProfesores';

export const RouterInicioSesion = () => {
    return (
        <BrowserRouter>

        <Routes>
            <Route path="/" element={<SesionAlumnosClases />} />
            <Route path="/sesion-alumnos-clases" element={<SesionAlumnosClases/>} />
            <Route path="/sesion-alumnos" element={<SesionAlumnos/>} />
            <Route path="/sesion-profesores" element={<SesionProfesores/>} />
            <Route path="*" element={<><h1>404 Inicio Sesión</h1></>}  />
            {/* <Route path="/otra-pagina" element={<OtraPagina />} /> */}
        </Routes>

        </BrowserRouter>
    );
}
