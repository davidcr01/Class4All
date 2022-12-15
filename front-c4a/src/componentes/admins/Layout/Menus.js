import React, { useEffect, useState } from 'react';
import CargandoProgress from '../../compartido/Layout/CargandoProgress';
import Menu from './Menu.js';

// Vista: admins

// Componente que contiene la lista de todos los menús
// Hace uso del componente Menu.js
export const Menus = () => {
    const [menus, SetMenus] =  useState([]);

    const conseguirMenus = async() =>{
        try {
            const url = "http://localhost:3900/api/menus/lista-menu";

            const res = await fetch(url)
            const data = await res.json();
            SetMenus(data.menus);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        conseguirMenus();
    }, []);

  return (
    <div>
        {menus != null && menus.length !== 0 ?
        menus.map(t =>{
            return(
                <Menu key={t._id} className="usuariolista" menu={t}/ >
            );
        })
        : <CargandoProgress/>

        }
    </div>
  )
}


export default Menus;