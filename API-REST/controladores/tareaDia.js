const Tarea = require("../modelos/TareasDia");
const Usuario = require("../modelos/Usuario");

const listaTareas = (req, res) => {
    let consulta = Tarea.find({}).exec((error, tareas) => {
        if (error || !tareas) {
            return res.status(404).json({
                status: "error",
                mensaje: "No hay tareas"
            });
        }
        return res.status(200).send({
            status: "success",
            tareas: tareas
        });
    });
};

const crearTarea = (req, res) => {
    
        //Recoger parametros por post
        let parametros = req.body;
        //Validar datos ?
    
        //Crear objeto 
        const tarea = new Tarea(parametros);
    
    
        //Guardar el objeto en la base de datos
        tarea.save((error, tareaGuardada) => {
            if (error || !tareaGuardada) {
                return res.status(404).json({
                    status: "error",
                    mensaje: "La tarea no se ha guardado"
                });
            }
            return res.status(200).json({
                status: "success",
                tarea: tareaGuardada,
                mensaje: "La tarea se ha guardado correctamente"
            });
    
        });
    
};

const eliminarTarea = (req, res) => {

    //Eliminar tarea de la coleccion de tareas
    let id = req.params.id;
    Tarea.findByIdAndDelete({_id : id}, (error, tareaEliminada) => {
        if (error || !tareaEliminada) {
            return res.status(404).json({
                status: "error",
                mensaje: "La tarea no se ha eliminado"
            });
        }
        return res.status(200).json({
            status: "success",
            tarea: tareaEliminada,
            mensaje: "La tarea se ha eliminado correctamente"
        });
    });

    //Eliminar la tarea de un usuario si la tiene asignada

    

    
};

const asignarTarea = (req, res) => {
    let idTarea = req.params.idTarea;
    let idAlumno = req.params.idAlumno;

    //validacion de datos
    
    /* let usuario = Usuario.findById({_id : idAlumno}, (error, usuario) => {
        if (error || !usuario) {
            return res.status(404).json({
                status: "error",
                mensaje: "El usuario no existe"
            });
        }
        //return usuario;
    });

    let tarea = Tarea.findById({_id : idTarea}, (error, tarea) => {
        if (error || !tarea) {
            return res.status(404).json({
                status: "error",
                mensaje: "La tarea no existe"
            });
        }
        //return tarea;
    });

    if(tarea.estado == 'asignada' ){
        let busqueda = usuario.tareasAsignadas.find(tarea => tarea == idTarea);
        if(busqueda == undefined){
            return res.status(404).json({
                status: "error",
                mensaje: "La tarea no estaba asociada"
            });
        }else{
            tarea.updateOne({estado : 'sinAsignar',usuarioAsignado:null}, (error, tareaActualizada) => {});
        }
    } */

    //actualizar tarea
    Tarea.updateOne({_id : idTarea}, 
                    {$set:{
                        estado : 'asignada',
                        usuarioAsignado : idAlumno
                        }
                    }, 
                    (error, tareaActualizada) => {
                        if (error || !tareaActualizada) {
                            return res.status(404).json({
                            status: "error",
                            mensaje: "La tarea no se ha actualizado"
                            });
                        }
        
                    });

    //actualizar alumno
    Usuario.updateOne({_id : idAlumno},
                    {$push:{
                        tareasAsignadas : idTarea
                        }
                    },
                    (error, usuarioActualizado) => {
                        if (error || !usuarioActualizado) {
                            return res.status(404).json({
                            status: "error",
                            mensaje: "El usuario no se ha actualizado"
                            });
                        }
                    });
    
    return res.status(200).json({
        status: "success",
            mensaje: "Todo se ha modificado correctamete",
            usuario : usuarioActualizado,
            tarea : tareaActualizada
    });
    
};


const desasignarTarea = (req, res) => {
    let idTarea = req.params.idTarea;
    
    //obtener id del usuario
    let idAlumno = Tarea.findById({_id : idTarea}, (error, tarea) => {
        if (error || !tarea) {
            return res.status(404).json({
                status: "error",
                mensaje: "La tarea no existe"
            });
        }
        return tarea.usuarioAsignado;
    });


    //Actualizar tarea
    Tarea.updateOne({_id : idTarea},
                    {$set:{
                        estado : 'sinAsignar',
                        usuarioAsignado : null
                        }
                    },
                    (error, tareaActualizada) => {
                        if (error || !tareaActualizada) {
                            return res.status(404).json({
                            status: "error",
                            mensaje: "La tarea no se ha actualizado"
                            });
                        }
                    });

    //Actualizar usuario
    Usuario.updateOne({_id : idAlumno},
                    {$pull:{
                        tareasAsignadas : idTarea
                        }
                    },
                    (error, usuarioActualizado) => {
                        if (error || !usuarioActualizado) {
                            return res.status(404).json({
                            status: "error",
                            mensaje: "El usuario no se ha actualizado"
                            });
                        }
                    });
    
    return res.status(200).json({
        status: "success",
            mensaje: "Todo se ha modificado correctamete",
            usuario : usuarioActualizado,
            tarea : tareaActualizada
    });




};


module.exports = {
    listaTareas,
    crearTarea,
    eliminarTarea,
    asignarTarea,
    desasignarTarea
}