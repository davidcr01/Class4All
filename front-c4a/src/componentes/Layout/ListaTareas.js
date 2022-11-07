import React, {useState} from 'react';
import Tareas from './Tareas.js';
import '../../styles.css';
const ListaTareas = (props) => {

        const [SA, setSA] = useState(false);
        const [A, setA] = useState(true);
        const [R, setR] = useState(false);
        const [NR, setNR] = useState(false);

        
        function seleccionSinAs(){
            //getelementbyid
            if(!SA){
                document.getElementById('sa').style.backgroundColor = '#70b67c';
                props.cambio("sinasignar")
                setSA(true);
                setA(false);               
                setR(false); 
                setNR(false); 
                document.getElementById('as').style.backgroundColor = 'rgb(196, 196, 255)';
                document.getElementById('re').style.backgroundColor = 'rgb(196, 196, 255)';
                document.getElementById('nr').style.backgroundColor = 'rgb(196, 196, 255)';
            }
            else{
                document.getElementById('sa').style.backgroundColor = 'rgb(196, 196, 255)';
                props.cambio("asignada")
                setSA(false);
                setA(true);               
                setR(false); 
                setNR(false); 
                document.getElementById('as').style.backgroundColor = '#70b67c';

            }
        }

        function seleccionAs(){
            //getelementbyid
                document.getElementById('as').style.backgroundColor = '#70b67c';
                props.cambio("asignada")
                setA(true);            
                setSA(false);
                setR(false); 
                setNR(false); 
                document.getElementById('sa').style.backgroundColor = 'rgb(196, 196, 255)';
                document.getElementById('re').style.backgroundColor = 'rgb(196, 196, 255)';
                document.getElementById('nr').style.backgroundColor = 'rgb(196, 196, 255)';


        }

        function seleccionReal(){
            //getelementbyid
            if(!R){
                document.getElementById('re').style.backgroundColor = '#70b67c';
                props.cambio("realizada")
                setR(true);           
                setA(false);            
                setSA(false); 
                setNR(false); 
                document.getElementById('as').style.backgroundColor = 'rgb(196, 196, 255)';
                document.getElementById('sa').style.backgroundColor = 'rgb(196, 196, 255)';
                document.getElementById('nr').style.backgroundColor = 'rgb(196, 196, 255)';
            }
            else{
                document.getElementById('re').style.backgroundColor = 'rgb(196, 196, 255)';
                props.cambio("asignada")
                setR(false);
                setA(true);            
                setSA(false); 
                setNR(false); 
                document.getElementById('as').style.backgroundColor = '#70b67c';

            }
        }

        function seleccionNoReal(){
            if(!NR){
                document.getElementById('nr').style.backgroundColor = '#70b67c';
                props.cambio("norealizada")
                setR(false);           
                setA(false);            
                setSA(false); 
                setNR(true);    
                document.getElementById('sa').style.backgroundColor = 'rgb(196, 196, 255)';
                document.getElementById('re').style.backgroundColor = 'rgb(196, 196, 255)';                
                document.getElementById('as').style.backgroundColor = 'rgb(196, 196, 255)';

            }
            else{
                document.getElementById('nr').style.backgroundColor = 'rgb(196, 196, 255)';
                props.cambio("asignada")
                setR(false);           
                setA(true);            
                setSA(false); 
                setNR(false);


                document.getElementById('as').style.backgroundColor = '70b67c';

            }
        }

        return (
            <div className='ListaTareas'>
                <div className="botones">
                    <div className="boton" id="sa" onClick={seleccionSinAs}>SIN ASIGNAR</div>
                    <div className="boton" id="as" onClick={seleccionAs}>ASIGNADAS</div>
                    <div className="boton" id="re" onClick={seleccionReal}>REALIZADAS</div>
                    <div className="boton" id="nr" onClick={seleccionNoReal}>NO REALIZADAS</div>
                </div>
                <Tareas tipo={props.tipo}/>
            </div>

        )


}

export default ListaTareas;