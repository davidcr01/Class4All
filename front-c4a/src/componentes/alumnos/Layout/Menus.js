import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";
import { ContextoRol } from '../../../contexto/Roles';
import Cantidades from './Cantidades';

// Componente para mostrar las comandas de los menús de los alumnos
// Vista: alumnos

const Menus = ({menus,cantidades,setCantidades}) => {

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
                    <Cantidades cantidades={cantidades} setCantidades={setCantidades} index={i}/>
                </>
                
            )
        }

        return  (
            <div className='cuerpo'>
                <div className="recuadrosmenus">
                    {menusJSX}
                </div>
            </div>
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