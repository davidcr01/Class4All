import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Gestion } from '../componentes/compartido/pages/Gestion';
import { GestionTareas } from '../componentes/compartido/pages/GestionTareas';
import { Materiales } from '../componentes/compartido/Layout/Materiales/Materiales';
import { GestionUsuarios} from '../componentes/admins/pages/GestionUsuarios';
import { CreacionUsuario } from '../componentes/admins/pages/CreacionUsuario';

export const RouterProfesores = () => {
    return (
        <BrowserRouter>

        <Routes>
            <Route path="/" element={<Gestion />} />
            {/* <Route path="/" element={<><h1>Profe</h1></>} /> */}
            <Route path="/entrega-material" element={<Materiales/>} />
            <Route path="/gestion-tareas" element={<GestionTareas />} />
            <Route path="/gestion-usuarios" element={<GestionUsuarios/>} />
            { /* <Route path="/crear-usuario" element={<CreacionUsuario/>} /> */}
            <Route path="*" element={<><h1>404 Profes</h1></>} />

            {/* <Route path="/otra-pagina" element={<OtraPagina />} /> */}
        </Routes>

        </BrowserRouter>
    );
}
