import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Gestion } from '../componentes/compartido/pages/Gestion';
import { GestionTareas } from '../componentes/compartido/pages/GestionTareas';
import { GestionUsuarios} from '../componentes/admins/pages/GestionUsuarios';
import { CreacionUsuario } from '../componentes/admins/pages/CreacionUsuario';

export const RouterAdmins = () => {
    return (
        <BrowserRouter>

        <Routes>
            <Route path="/" element={<Gestion />} />
            <Route path="/gestion-tareas" element={<GestionTareas />} />
            <Route path="/gestion-usuarios" element={<GestionUsuarios/>} />
            <Route path="/crear-usuario" element={<CreacionUsuario/>} />

            {/* <Route path="/otra-pagina" element={<OtraPagina />} /> */}
        </Routes>

        </BrowserRouter>
    );
}
