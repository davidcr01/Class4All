import * as React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const Prueba = () => {
  return (
    <div className='paginacion'>
    <Stack spacing={2}>
      <Pagination count={10} />
      <Pagination count={10} color="warning" />
      <Pagination count={10}  color="success"/>
      <Pagination count={10} disabled />
    </Stack>
    </div>
  )
}
