import {Box, Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const MuiBreadcrumbs = () => {
    return <Box m={2} className="breadcrumbs">
        <Breadcrumbs aria-label="breadcrumb"/*  separator={<NavigateNextIcon fontSize='small'></NavigateNextIcon>}*/> 
            <Link underline="hover" color="inherit" href="/gestion-centro">Gestion del centro </Link>
        </Breadcrumbs>
    </Box>
}

export const MuiBreadcrumbsGTS = (props) => {
    return <Box m={2} className="breadcrumbs">
        <Breadcrumbs aria-label="breadcrumb"/*  separator={<NavigateNextIcon fontSize='small'></NavigateNextIcon>}*/> 
            <Link underline="hover" color="inherit" href="/gestion-centro">Gestion del centro </Link>
            <Link underline="hover" color="inherit" href="/gestion-tareas">Gestion de tareas </Link>
            <Typography color="text.primary">{props.tipo}</Typography>
        </Breadcrumbs>
    </Box>
}

export const MuiBreadcrumbsGUS = () => {
    return <Box m={2} className="breadcrumbs">
        <Breadcrumbs aria-label="breadcrumb"/*  separator={<NavigateNextIcon fontSize='small'></NavigateNextIcon>}*/> 
            <Link underline="hover" color="inherit" href="/gestion-centro">Gestión del centro </Link>
            <Typography color="text.primary">Gestión de Usuario</Typography>
        </Breadcrumbs>
    </Box>
}


export const MuiBreadcrumbsCUS = () => {
    return <Box m={2} className="breadcrumbs">
        <Breadcrumbs aria-label="breadcrumb"/*  separator={<NavigateNextIcon fontSize='small'></NavigateNextIcon>}*/> 
            <Link underline="hover" color="inherit" href="/gestion-centro">Gestión del centro </Link>
            <Link underline="hover" color="inherit" href="/gestion-usuario">Gestión de Usuario </Link>

            <Typography color="text.primary">Crear Usuario</Typography>
        </Breadcrumbs>
    </Box>
}
