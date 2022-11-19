import React,{useEffect,useState} from 'react'


import {ContextoRol} from './contexto/Roles';
import {RouterAdmins} from './routing/RouterAdmins.js';
import {RouterInicioSesion} from './routing/RouterInicioSesion.js';
import {RouterAlumnos} from './routing/RouterAlumnos.js';
import {RouterProfesores} from './routing/RouterProfesores.js';
import Cookies from 'universal-cookie';

function App() {
  const [cookie, setCookie] = useState(null);
  const [rol, setRol] = useState(null);
  const [error, setError] = useState(-1);

  const ChangeRol = () => {
    
    if(cookie === 'Administrador')
      setRol('Administrador');
    else{
      if(cookie === 'Alumno')
        setRol('Alumno');
      else{
        if(cookie === 'Profesor')
          setRol('Profesor');
        else{
          setRol(null);
        }
        
      }
    }
    
  };

  const getCookieActual = async () => {
    const cookies = new Cookies();
    let cookieActual = cookies.get('loginCookie')
    if(cookieActual !== undefined){
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



  return (
    <div>
      <ContextoRol.Provider value={{setCookie}}>
        {rol === 'Administrador' ? (<RouterAdmins/>) : (rol === 'Alumno' ? (<RouterAlumnos/>) : (rol === 'Profesor' ? (<RouterProfesores/>) : (<RouterInicioSesion />)))}
      </ContextoRol.Provider>
      
      
    </div>
  );
}

export default App;
