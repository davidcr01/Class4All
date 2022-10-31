import {Box, Breadcrumbs, Link, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const MuiBreadcrumbs = () => {
    return <Box m={2}>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize='small'></NavigateNextIcon>}>
            <Link underline="hover" color="inherit" href="/">Inicio </Link>
            <Link underline="hover" color="inherit" href="/">Gestion del centro</Link>
            <Typography color="text.primary">Breadcrumb</Typography>
        </Breadcrumbs>
    </Box>
}

