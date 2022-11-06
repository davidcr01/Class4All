import React from 'react';
const Tarea = (props) => {
    return(
        <div className="tarea" >
            <> <div>Tarea: Poner microondas</div>
            <div>Fecha: 15/09/22</div>
            <div>Usuario: javi</div>
            <div>Realizado: si</div>
            <div>Confirmar: <input type="checkbox"></input></div>
            <div className="botonesTareasReal">
                <div className="botonTareasReal">BIEN</div>
                <div className="botonTareasReal">MAL</div>
                <div className="botonTareasReal">TARDE</div>
            </div>
            <form>
                <textarea name="message" rows="5" cols="80">
                    Retroalimentación:
                </textarea>
            </form>
            
            </>
        </div>

    )

}

export default Tarea;