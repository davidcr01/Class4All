import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";
import { ContextoRol } from '../../../contexto/Roles';
import Cantidades from './Cantidades';

// Componente para mostrar las comandas de los menús de los alumnos
// Vista: alumnos

const Menus = ({menus,/*cantidades,setCantidades,*/currentIndex, currentAula, allMenus, setAllMenus}) => {

    if(menus !== undefined) {
        let menusJSX = [];
        for(let i=0; i<menus.length; i++){
            menusJSX.push(
                <>
                    <section className="botonesComandas">
                        <img className="imgMenu" src={"http://localhost:3900/api/menus/obtenerfoto/"+menus[i]._id}/>
                        <p className="textoComanda">{menus[i].nombre.toUpperCase()}</p>
                    </section>
                    <Cantidades currentAula={currentAula} allMenus={allMenus} setAllMenus={setAllMenus} index={currentIndex + i}/>
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
}

export default Menus;