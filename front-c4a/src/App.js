import React,{useEffect,useState} from 'react'


import {ContextoRol} from './contexto/Roles';
import {RouterAdmins} from './routing/RouterAdmins.js';
import {RouterInicioSesion} from './routing/RouterInicioSesion.js';
import {RouterAlumnos} from './routing/RouterAlumnos.js';
import {RouterProfesores} from './routing/RouterProfesores.js';
import Cookies from 'universal-cookie';
import { isCookieSet } from './interfaces/cookies';

function App() {
  const [cookie, setCookie] = useState(null);
  const [rol, setRol] = useState(null);
  const [error, setError] = useState(-1);

  const ChangeRol = () => {
    switch(cookie){
      case "Administrador":
      case "Alumno":
      case "Profesor":
        setRol(cookie);
        break;
      default:
        setRol(null);
        break;
    }

  };

  const getCookieActual = async () => {
    const cookies = new Cookies();
    let cookieActual = cookies.get('loginCookie')
    let cookieSet = await isCookieSet();

    if(cookieActual !== undefined && cookieSet){
      setCookie(cookieActual.rol);
    }
    else{
      setError(error + 1);
      setCookie(null);
    }
  };
  
  useEffect(() => {
    getCookieActual();
  }, []);

  useEffect(() => {
    ChangeRol();
  }, [cookie]);

  //useEffect debug
  useEffect(() => {
  }, [rol]);

  return (
    <div>
      <ContextoRol.Provider value={{setCookie}}>
        {rol === 'Administrador' ? (<RouterAdmins/>) : (rol === 'Alumno' ? (<RouterAlumnos/>) : (rol === 'Profesor' ? (<RouterProfesores/>) : (<RouterInicioSesion />)))}
      </ContextoRol.Provider>
      
      
    </div>
  );
}

export default App;
