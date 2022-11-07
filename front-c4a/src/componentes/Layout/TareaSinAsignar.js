
import React, { useEffect, useState } from 'react';

const TareaSinAsignar = (props) => {

    const [usuarios, setUsuarios] = React.useState([{}]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        setCargando(true);
        getUser();
    }, []);


    const getUser = async () => {
        try {
            const url = "http://localhost:3900/api/usuarios/listar-usuarios"
            console.log(url);
            const res = await fetch(url)
            const data = await res.json();

            console.log(data);

            setUsuarios(data.usuarios);
            setCargando(false);

        } catch (error) {
            console.log(error);

        }
    }

            if(cargando){
                return <div>Cargando...</div>
            }else{
                return (
                <div className="tarea">
                <div>Tarea: {props.tarea.nombre}</div>
                <div>Fecha: {props.tarea.fechaAsignada}</div>
                <div>Usuario: <select name="Usuario">
                    {usuarios.map(u => {
                        return(
                            <option value={u._id}>{u.nombre}</option>
                        )
                    })}
                </select>

                </div>

            </div>)
            }


    }

    export default TareaSinAsignar;
