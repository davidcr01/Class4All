import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Agenda } from '../componentes/alumnos/pages/Agenda';
import { Tareas } from '../componentes/alumnos/pages/Tareas';
import { TareaEspecifica } from '../componentes/alumnos/pages/TareaEspecifica';
import { PaginaPrincipal} from '../componentes/alumnos/pages/PaginaPrincipal';
import { ComandasClases } from '../componentes/alumnos/pages/ComandasClases';
import { Comandas } from '../componentes/alumnos/pages/Comandas';
import { EntregaMaterial } from '../componentes/alumnos/pages/EntregaMaterial';

export const RouterAlumnos = () => {
    return (
        <BrowserRouter>

        <Routes>
            
            
            <Route path="/" element={<PaginaPrincipal/>} />
            <Route path="/Agenda" element={<Agenda/>} />
            <Route path="/tareas" element={<Tareas/>} />
            <Route path="/mitarea/:id" element={<TareaEspecifica/>} />
            <Route path="/comanda/:id" element={<ComandasClases/>} />
            <Route path="/comandas/:id" element={<Comandas/>} />
            <Route path="/entregaMaterial/:id" element={<EntregaMaterial/>} />
            <Route path="*" element={<><h1>404 Router Alumnos</h1></>}  />
        
            {/* <Route path="/otra-pagina" element={<OtraPagina />} /> */}
        </Routes>

        </BrowserRouter>
    );
}
