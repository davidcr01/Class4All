import React, { useEffect } from 'react';
import '../styles.css';
import BuscarFiltros from '../../compartido/Layout/Tareas/BuscarFiltros';
import ListaUsuarios from '../../admins/Layout/ListaUsuarios';
import {useState} from 'react'

// Vista: admins
// Componente que contiene los filtros y la lista de los usuarios

const PantallaGestionUsuarios = () => {
    const [filtroalumnos, setFiltroAlumnos] = useState(true);
    const [filtroadmins, setFiltroAdmins] = useState(true);
    const [filtroprofesores, setFiltroProfesores] = useState(true);

    useEffect(() => {
        console.log(filtroalumnos);
        console.log(filtroadmins);
        console.log(filtroprofesores);
        
    } , [filtroalumnos, filtroadmins, filtroprofesores]);

    const childToParent = (i) => {

        if(i === 1){
            setFiltroAlumnos(!filtroalumnos);
        }
        else if (i === 2){
            setFiltroAdmins(!filtroadmins);
        }
        else if (i === 3){
            setFiltroProfesores(!filtroprofesores);
        }

    }
    return (

        <div className='PantallaGestionUsuarios'>
            <BuscarFiltros childToParent={childToParent}/>

            <ListaUsuarios filtroalumnos={filtroalumnos} filtroadmins={filtroadmins} filtroprofesores={filtroprofesores} />
        </div>
    )
}

export default PantallaGestionUsuarios;