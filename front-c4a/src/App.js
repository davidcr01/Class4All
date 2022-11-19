import React,{useEffect,useState} from 'react'


import {Rutas} from './routing/Rutas.js';
import {ContextoRol} from './Contexto/Roles';
import {RouterAdmins} from './routing/RouterAdmins.js';
import {RouterInicioSesion} from './routing/RouterInicioSesion.js';
import {RouterAlumnos} from './routing/RouterAlumnos.js';

function App() {
  const [cookie, setCookie] = useState(null);
  const [rol, setRol] = useState(null);

  const ChangeRol = () => {
    if(cookie === 'admin')
      setRol('admin');
    else{
      if(cookie === 'alumno')
        setRol('alumno');
      else{
        if(cookie === 'profesor')
          setRol('profesor');
        else
          setRol(null);
        
      }
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
        {!rol && (<RouterInicioSesion />)}
        {rol === 'admin' && (<RouterAdmins/>)}
        {rol === 'alumno' && (<RouterAlumnos/>)}
        {rol === 'profesor' && (<RouterProfesores/>)}
      </ContextoRol.Provider>
      
      
    </div>
  );
}

export default App;
