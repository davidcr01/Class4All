import React from "react";

export const ContenidoFichaAlumno = ({alumno}) => {
    return (
        <div id="div-info-alumno">
            <div id="info-alumno-texto">
                <div className="flex">
                    <div className="strong flex">Nombre: </div> <div className="flex">{alumno.nombre} {alumno.apellido1} {alumno.apellido2}</div>
                </div>

                <div className="flex">
                    <div className="strong flex">Edad: </div> <div className="flex">57 años</div>
                </div>
                
                <div className="flex">
                    <div className="flex strong">Tipo de usuario:</div> <div className="flex">{alumno.rol}</div>
                </div>

                <div className="flex">
                    <div className="flex strong">Tipo de inicio de sesión: </div> <div className="flex">WIP</div>
                </div>

                <div className="flex">
                    <div className="flex strong">Menú asignado: </div>WIP (quizas ni se implemente)
                </div>

                <div className="flex">
                    <div className="flex strong">Retroalimentación: </div><div className="flex">????</div>
                </div>

                <div className="flex">
                    <div className="flex strong">Clase: </div><div className="flex">{alumno.clase}</div>
                </div>
            </div>

            <div className="div-foto-perfil">
                <img className="foto-perfil" src={"http://localhost:3900/api/usuarios/get-foto/"+alumno._id}/>
            </div>
    </div>        
    )
}