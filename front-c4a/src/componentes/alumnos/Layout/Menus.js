import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";
import { ContextoRol } from '../../../contexto/Roles';

// Componente para mostrar las comandas de los menús de los alumnos
// Vista: alumnos

const Menus = ({menus}) => {

    const {setCookie} = React.useContext(ContextoRol);

    
    const nav = useNavigate();

    if(menus !== undefined) {
        let menusJSX = [];
        for(let i=0; i<menus.length; i++){
            menusJSX.push(
                <>
                    <section className="botonesAlumnos">
                        <img className="foto" src={"http://localhost:3900/api/menus/obtenerfoto/"+menus[i]._id}/>
                        {menus[i].nombre}
                    </section>
                </>
                
            )
        }

        return  (
            <>
                    {menusJSX}
            </>
        )
    }
/*
    else{
        return (
            <div>
                <h1>NO HAY menus EN ESTA CLASE</h1>
            </div>
        )
    }
    */
}

export default Menus;