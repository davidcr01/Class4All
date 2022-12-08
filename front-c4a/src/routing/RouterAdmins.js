import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Gestion } from '../componentes/compartido/pages/Gestion';
import { GestionTareas } from '../componentes/compartido/pages/GestionTareas';
import { GestionUsuarios} from '../componentes/admins/pages/GestionUsuarios';
import { CreacionUsuario } from '../componentes/admins/pages/CreacionUsuario';
import { ModificarUsuario } from '../componentes/admins/pages/ModificarUsuario';
import { GestionMenus } from '../componentes/admins/pages/GestionMenus';
import { InfoMenus } from '../componentes/admins/pages/InfoMenus';
import { CreacionMenu } from '../componentes/admins/pages/CreacionMenu';
import { FichaAlumno } from '../componentes/compartido/pages/FichaAlumno';

export const RouterAdmins = () => {
    return (
        <BrowserRouter>

        <Routes>
            <Route path="/" element={<Gestion />} />
            <Route path="/gestion-tareas" element={<GestionTareas />} />
            <Route path="/gestion-usuarios" element={<GestionUsuarios/>} />
            <Route path="/crear-usuario" element={<CreacionUsuario/>} />
            <Route path="/modificar-usuario" element={<ModificarUsuario/>} />

            <Route path="/gestion-menus" element={<GestionMenus/>} />
            <Route path="/info-menus" element={<InfoMenus/>} />
            <Route path="/crear-menu" element={<CreacionMenu/>} />
            <Route path="/ficha-user" element={<FichaAlumno/>}/>
            <Route path="*" element={<><h1>404 Admins</h1></>} />
            {/* <Route path="/otra-pagina" element={<OtraPagina />} /> */}
        </Routes>

        </BrowserRouter>
    );
}
