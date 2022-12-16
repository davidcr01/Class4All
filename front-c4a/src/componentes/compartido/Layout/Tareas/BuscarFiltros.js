import { Card, CardContent, Checkbox, FormControlLabel, FormGroup, Paper } from '@mui/material';
import React from 'react';
import { MiTF } from '../../../muiCustomComponents';
import '../../styles.css';

// Componente para buscar filtros en la gestión de las tareas
// Vista: compartido (admins y profes)

const BuscarFiltros = ({ childToParent }) => {
    const data = 0;

    const aplicarFiltro = (n, e) => {
        console.log(n);
        childToParent(n);

    }
    return (
        <div className="divfiltros">
            <div className="div-filtros-buscar">
                {/* <label className="buscarlabel">BUSCAR */}
                {/* <input className="filtrotexto" type="text" /></label> */}
                {/* <div className="checkboxs"> */}
                {/* <label htmlFor="a" className="checkbox"><input type="checkbox" id="1" onClick={e => aplicarFiltro(1,e)} defaultChecked/>Alumnos</label> */}
                {/* <label htmlFor="a" className="checkbox"><Checkbox />Alumnos</label> */}
                <MiTF label="Buscar" />
                    <Card>
                        <CardContent>
                            <div className='Filtros'>Filtros:</div>
                        </CardContent>
                        <CardContent>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox id='1' onClick={e => aplicarFiltro(1, e)} defaultChecked />} label="Alumno" />
                                <FormControlLabel control={<Checkbox id='2' onClick={e => aplicarFiltro(2, e)} defaultChecked />} label="Administradores" />
                                <FormControlLabel control={<Checkbox id='3' onClick={e => aplicarFiltro(3, e)} defaultChecked />} label="Profesores" />
                            </FormGroup>
                        </CardContent>
                    </Card>
                {/* <label htmlFor="b" className="checkbox"><input type="checkbox" id="2" onClick={e => aplicarFiltro(2,e)} defaultChecked/>Administradores</label> */}
                {/* <label htmlFor="c" className="checkbox"><input type="checkbox" id="3" onClick={e => aplicarFiltro(3,e)} defaultChecked/>Profesores</label> */}
                {/* </div> */}
            </div>
        </div>
    )

}

export default BuscarFiltros;