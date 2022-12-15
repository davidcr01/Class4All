import React from 'react';
import Usuarios from '../../admins/Layout/Usuarios.js';
import '../../../styles.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import {styled} from "@mui/material/styles";

// Devuelve el botón de crear usuarios y lista los ya existentes
// Vista: administrador

const ListaUsuarios = (props) => {
    let nav = useNavigate();

    const MiButton = styled(Button)({
        width: "max-content",
        margin: "25px auto 0 auto",
    })

        return (
            <div className='ListaUsuarios'>
                <MiButton size='large' variant='contained' onClick={() => nav("/crear-usuario")}>Crear usuario</MiButton>
                {/* <button className="botoncrear" onClick={() => nav("/crear-usuario")}>Crear usuario</button> */}
                <Usuarios filtroalumnos={props.filtroalumnos} filtroprofesores={props.filtroprofesores} filtroadmins={props.filtroadmins}/>
            </div>

        )


}

export default ListaUsuarios;