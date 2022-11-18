import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Gestion } from '../componentes/compartido/pages/Gestion';
import { GestionTareas } from '../componentes/compartido/pages/GestionTareas';
import { PaginaPrincipal} from '../componentes/alumnos/pages/PaginaPrincipal';
import { SesionAlumnosClases} from '../componentes/compartido/pages/SesionAlumnosClases';
import { SesionAlumnos} from '../componentes/alumnos/pages/SesionAlumnos';
import { GestionUsuarios} from '../componentes/admins/pages/GestionUsuarios';
import { SesionProfesores } from '../componentes/compartido/pages/SesionProfesores';
import { LoginOK } from '../componentes/compartido/pages/loginOK';
import { Agenda } from '../componentes/alumnos/pages/Agenda';
import { Tareas } from '../componentes/alumnos/pages/Tareas';
import { CreacionUsuario } from '../componentes/admins/pages/CreacionUsuario';
import { TareaEspecifica } from '../componentes/alumnos/pages/TareaEspecifica';
export const Rutas = () => {
    return (
        <BrowserRouter>

        <Routes>
            <Route path="/" element={<SesionAlumnosClases />} />
            <Route path="/gestion-centro" element={<Gestion />} />
            <Route path="/gestion-tareas" element={<GestionTareas />} />
            <Route path="/pagina-principal" element={<PaginaPrincipal/>} />
            <Route path="/gestion-usuarios" element={<GestionUsuarios/>} />
            <Route path="/sesion-alumnos-clases" element={<SesionAlumnosClases/>} />
            <Route path="/sesion-alumnos" element={<SesionAlumnos/>} />
            <Route path="/sesion-profesores" element={<SesionProfesores/>} />
            <Route path="/login-ok" element={<LoginOK/>} />
            <Route path="/Agenda" element={<Agenda/>} />
            <Route path="/tareas" element={<Tareas/>} />
            <Route path="/crear-usuario" element={<CreacionUsuario/>} />
            <Route path="/mitarea/:id" element={<TareaEspecifica/>} />

            {/* <Route path="/otra-pagina" element={<OtraPagina />} /> */}
        </Routes>

        </BrowserRouter>
    );
}

/**
 * Alumnos:
 * inicio
 * pagina-principal
 * Agenda
 * tareas
 * mitarea
 *
 * NO VA A TENER ACCESO A:
 * gestion-centro
 * gestion-tareas
 * gestion-usuarios
 * crear-usuario
 *
 *
 *
 * ADMIN:
 * TODO libre POR DEFECTO, excepto pantallas alumnos
 *
 * PROFESOR:
 * TEMA TAREAS NADA MAS, lo demas bloqueado (incluyendo alumno)
 *
 *
 * Profesores y admins NO TIENEN ACCESO A:
 * pagina-principal
 * Agenda
 * tareas
 * mitarea
 */