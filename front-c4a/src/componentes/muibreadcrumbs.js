import {Box, Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Migas de pan. Se definen las necesarias

export const MuiBreadcrumbs = () => {
    return <Box m={2} className="breadcrumbs">
        <Breadcrumbs aria-label="breadcrumb"/*  separator={<NavigateNextIcon fontSize='small'></NavigateNextIcon>}*/> 
            <Link underline="hover" color="inherit" href="/">Gestion del centro </Link>
        </Breadcrumbs>
    </Box>
}

export const MuiBreadcrumbsGTS = (props) => {
    return <Box m={2} className="breadcrumbs">
        <Breadcrumbs aria-label="breadcrumb"/*  separator={<NavigateNextIcon fontSize='small'></NavigateNextIcon>}*/> 
            <Link underline="hover" color="inherit" href="/">Gestion del centro </Link>
            <Link underline="hover" color="inherit" href="/gestion-tareas">Gestion de tareas </Link>
            <Typography color="text.primary">{props.tipo}</Typography>
        </Breadcrumbs>
    </Box>
}

export const MuiBreadcrumbsGUS = () => {
    return <Box m={2} className="breadcrumbs">
        <Breadcrumbs aria-label="breadcrumb"/*  separator={<NavigateNextIcon fontSize='small'></NavigateNextIcon>}*/> 
            <Link underline="hover" color="inherit" href="/">Gestión del centro </Link>
            <Typography color="text.primary">Gestión de Usuario</Typography>
        </Breadcrumbs>
    </Box>
}


export const MuiBreadcrumbsCUS = () => {
    return <Box m={2} className="breadcrumbs">
        <Breadcrumbs aria-label="breadcrumb"/*  separator={<NavigateNextIcon fontSize='small'></NavigateNextIcon>}*/> 
            <Link underline="hover" color="inherit" href="/">Gestión del centro </Link>
            <Link underline="hover" color="inherit" href="/gestion-usuarios">Gestión de Usuario </Link>

            <Typography color="text.primary">Crear Usuario</Typography>
        </Breadcrumbs>
    </Box>
}

export const MuiBreadcrumbsGM = () => {
    return <Box m={2} className="breadcrumbs">
        <Breadcrumbs aria-label="breadcrumb"/*  separator={<NavigateNextIcon fontSize='small'></NavigateNextIcon>}*/> 
            <Link underline="hover" color="inherit" href="/">Gestión del centro </Link>
            <Typography color="text.primary">Gestión de Menús</Typography>
        </Breadcrumbs>
    </Box>
}

export const MuiBreadcrumbsIM = () => {
    return <Box m={2} className="breadcrumbs">
        <Breadcrumbs aria-label="breadcrumb"/*  separator={<NavigateNextIcon fontSize='small'></NavigateNextIcon>}*/> 
            <Link underline="hover" color="inherit" href="/">Gestión del centro </Link>
            <Link underline="hover" color="inherit" href="/gestion-menus">Gestión de Menus </Link>

            <Typography color="text.primary">Información del Menú</Typography>
        </Breadcrumbs>
    </Box>
}

export const MuiBreadcrumbsCM = () => {
    return <Box m={2} className="breadcrumbs">
        <Breadcrumbs aria-label="breadcrumb"/*  separator={<NavigateNextIcon fontSize='small'></NavigateNextIcon>}*/> 
            <Link underline="hover" color="inherit" href="/">Gestión del centro </Link>
            <Link underline="hover" color="inherit" href="/gestion-menus">Gestión de Menus </Link>

            <Typography color="text.primary">Crear Menú</Typography>
        </Breadcrumbs>
    </Box>
}

export const MuiBreadcrumbsPM = (props) => {
    return <Box m={2} className="breadcrumbs">
        <Breadcrumbs aria-label="breadcrumb"/*  separator={<NavigateNextIcon fontSize='small'></NavigateNextIcon>}*/> 
            <Link underline="hover" color="inherit" href="/">Gestion del centro </Link>
            <Typography color="text.primary">{props.tipo}</Typography>
        </Breadcrumbs>
    </Box>
}

export const MuiBreadcrumbsFichaAlumno = () => {
    return <Box m={2} className="breadcrumbs">
        <Breadcrumbs aria-label="breadcrumb"/*  separator={<NavigateNextIcon fontSize='small'></NavigateNextIcon>}*/> 
            <Link underline="hover" color="inherit" href="/">Gestion del centro </Link>
            <Link underline="hover" color="inherit" href="/gestion-usuarios">Gestion de usuarios </Link>
            <Typography color="text.primary">Ficha Alumno</Typography>
        </Breadcrumbs>
    </Box>    
}