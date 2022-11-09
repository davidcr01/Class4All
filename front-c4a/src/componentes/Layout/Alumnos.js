import { CircularProgress } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";
import { loginAlumno } from '../../interfazCookies/cookies';
import CargandoProgress from './CargandoProgress';

const Alumnos = ({aula}) => {
    //let prueba=[];
    //let apartados = ["Pepe", "Ana", "Jaimito", "Atanasia", "Andrés", "Alberto"]
    //let pictogramas = [ require("../../img/profeA.jpg"), require("../../img/profeB.jpg"), require("../../img/profeC.jpg"), require("../../img/profeD.jpg"), require("../../img/user.png"), require("../../img/user.png")]
    let user = require("../../img/user.png")

    //alert(aula)

    
  const [cargando, setCargando] = useState(true);
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    const getAlumnos = async () => {
      try {
          const url = "http://localhost:3900/api/usuarios/alumnos/"+aula;
          console.log(url);
          const res = await fetch(url)
          const data = await res.json();
  
          return data;
          
      } catch (error) {
          console.log(error);
  
          return undefined;
      }        
  }    

    getAlumnos().then((response) => {
      setAlumnos(response.alumnos);
      setCargando(false);
    })
  }, [])


    const style = {
        width: "auto", 
        backgroundColor: "#E2E2E2", 
        borderColor: "black", 
        borderStyle: "solid", 
        borderWidth: "3px", 
        display: "grid", 
        marginBottom: "5px", 
        fontSize: "2vw", 
        textAlign:"center", 
        padding: "3vw 0",
    };

    const style2 = {width: "50%", 
        height: "auto", 
        display: "block", 
        marginLeft: "auto",
        marginRight: "auto"
    };

    const recuadros = {width:"100%", 
        paddingTop:"15px", 
        paddingBottom:"15px", 
        justifyContent: "center", 
        display: "grid", 
        marginRight:"auto", 
        marginLeft:"auto", 
        gridTemplateColumns: "25% 25% 25%", 
        gridTemplateRows:"20vw 20vw", 
        gridColumnGap: "40px", 
        gridRowGap: "15px"
    };

    const imagenUser = {alignSelf: "end", 
        width: "5%", height: "auto%", 
        display: "block", 
        marginLeft: "auto", 
        marginRight: "5%", 
        marginBottom: "2%"
    };

    const cuerpo = {
        width: "auto", 
        borderWidth: "3px", 
        display: "flex", 
        marginBottom: "5px", 
        padding: "3vw 0",
    };



    const nav = useNavigate();

    if(cargando)
    return (
        <CargandoProgress/>
    )
    else if(alumnos !== undefined) {
        let alumnosJSX = []
        const cookies = new Cookies();

        const loginUser = (id) => {
            loginAlumno(id).then((data) => {
                if(data !== undefined){
                    alert(JSON.stringify(data));
                    cookies.set("loginCookie", {id: data.id, sessionID: data.sessionID, rol: data.rol}, {maxAge: 86400});
                }


                nav("/pagina-principal");
            });
        }

        for(let i=0; i<alumnos.length; i++){
            //alert(alumnos[i]._id);
            alumnosJSX.push(
                <div style={style} onClick={()=> loginUser(alumnos[i]._id)}>
                    <img style={style2} src={"http://localhost:3900/api/usuarios/foto/"+alumnos[i]._id}/>
                    {alumnos[i].nombre}
                </div>                
            )
        }

        const handleClick = () =>{
            nav("/sesion-profesores");
        };

        return  (
            <div style={cuerpo}>
                <div style={recuadros}>
                    {alumnosJSX}
                </div>

                <img style={imagenUser} src={user} onClick={handleClick}></img>
            </div>
        )
    }

    else{
        return (
            <div>
                <h1>NO HAY ALUMNOS EN ESTA CLASE</h1>
            </div>
        )
    }
}

export default Alumnos;