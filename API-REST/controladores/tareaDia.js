const Tarea = require("../modelos/TareasDia");
const Usuario = require("../modelos/Usuario");
const fs = require('fs');
const path = require('path');
const { default: mongoose, Mongoose } = require("mongoose");

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

const obtenerTarea = (req, res) => {
    let idTarea = req.params.idTarea;
    let consulta = Tarea.findById(idTarea).exec((error, tarea) => {
        if (error || !tarea) {
            return res.status(404).json({
                status: "error",
                mensaje: "No existe la tarea"
            });
        }
        return res.status(200).send({
            status: "success",
            tarea: tarea
        });
    });
};

const obtenerTareasUsuario = (req, res) => {
    let idUsuario = req.params.idUsuario;
    //encontrar todas las tareas para usuarioAsignado
    let consulta = Tarea.find({ usuarioAsignado: idUsuario }).exec((error, tareas) => {
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



//Funcionalidad solo para pruebas 
const crearTarea = (req, res) => {

    //Recoger parametros por post
    let parametros = req.body;

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
    //Se le pasa el id por la url
    let id = req.params.id;
    Tarea.findByIdAndDelete({ _id: id }, (error, tareaEliminada) => {
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
    //recojo los datos
    let idTarea = req.params.idTarea;
    let idAlumno = req.params.idAlumno;

    //actualizar tarea
    Tarea.findByIdAndUpdate({ _id: idTarea },
        {
            $set: {                             //Para actualizar valores concretos se debe usar set
                estado: 'asignada',
                usuarioAsignado: idAlumno,
                fechaAsignada: Date.now()
            }
        },
        { lean: true, new: true },
        (error, tareaActualizada) => {
            if (error || !tareaActualizada) {
                return res.status(404).json({
                    status: "error",
                    mensaje: "La tarea no se ha actualizado"
                });
            }
            //tareaActualizada = tareaActualizada;
            //actualizar alumno
            Usuario.findByIdAndUpdate({ _id: idAlumno },
                {
                    $push: {                            //Introduce un nuevo elemento en un array
                        tareasAsignadas: idTarea
                    }
                },
                { lean: true, new: true },
                (error, usuarioActualizado) => {
                    if (error || !usuarioActualizado) {
                        return res.status(404).json({
                            status: "error",
                            mensaje: "El usuario no se ha actualizado"
                        });
                    }
                    return res.status(200).json({
                        status: "success",
                        mensaje: "Todo se ha modificado bien",
                        usuario: usuarioActualizado,
                        tarea: tareaActualizada
                    });
                    //usuarioActualizado = usuarioActualizado;
                });
        });





};


const desasignarTarea = (req, res) => {
    let idTarea = req.params.idTarea;

    Tarea.findById({ _id: idTarea }, (error, tarea) => {
        if (error || !tarea) {
            return res.status(404).json({
                status: "error",
                mensaje: "La tarea no existe"
            });
        }

        //obtener id del usuario
        let idAlumno = tarea.usuarioAsignado.toString();

        //Actualizar datos
        Tarea.findByIdAndUpdate({ _id: idTarea },
            {
                $set: {
                    estado: 'sinAsignar',
                    usuarioAsignado: null,
                    fechaAsignada: null
                }
            },
            { lean: true, new: true },
            (error, tareaActualizada) => {
                if (error || !tareaActualizada) {
                    return res.status(404).json({
                        status: "error",
                        mensaje: "La tarea no se ha actualizado"
                    });
                }
                Usuario.findByIdAndUpdate({ _id: idAlumno },
                    {
                        $pull: {                                //Saca un elemento de un array
                            tareasAsignadas: idTarea
                        }
                    },
                    { lean: true, new: true },                            //Para que devuelva el objeto actualizado
                    (error, usuarioActualizado) => {
                        if (error || !usuarioActualizado) {
                            return res.status(404).json({
                                status: "error",
                                mensaje: "El usuario no se ha actualizado"
                            });
                        }
                        return res.status(200).json({
                            status: "success",
                            mensaje: "Todo se ha modificado bien",
                            usuario: usuarioActualizado,
                            tarea: tareaActualizada
                        });
                    });
            });



    });

    /* Tarea.findById({_id : idTarea}, (error, tarea) => {
        if (error || !tarea) {
            return res.status(404).json({
                status: "error",
                mensaje: "La tarea no existe"
            });
        }
        
        //obtener id del usuario
        let idAlumno = tarea.usuarioAsignado.toString();
        
        //Actualizar datos
        Tarea.updateOne({_id : idTarea},
            {$set:{
                estado : 'sinAsignar',
                usuarioAsignado : null,
                fechaAsignada : null
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
            
        Usuario.updateOne({_id : idAlumno},
            {$pull:{                                //Saca un elemento de un array
                tareasAsignadas : idTarea
                }
            },
            {new: true},                            //Para que devuelva el objeto actualizado
            (error, usuarioActualizado) => {
                if (error || !usuarioActualizado) {
                    return res.status(404).json({
                    status: "error",
                    mensaje: "El usuario no se ha actualizado"
                    });
                }
                return res.status(200).json({
                    status: "success",
                        mensaje: "Todo se ha modificado correctamete",
                });
            });
                
    }); */

};

const obtenerFoto = (req, res) => {
    let id = req.params.idTarea;
    Tarea.findById({ _id: id }, (error, tarea) => {
        if (error || !tarea) {
            return res.status(404).json({
                status: "error",
                mensaje: "La tarea no existe"
            });
        }
        let foto = tarea.foto;
        let urlFisica = "./public/fotos/" + foto;
        fs.stat(urlFisica, (error, existe) => {
            if (existe) {
                /* return res.status(200).json({
                    status: "success",
                        mensaje: "Todo se ha modificado correctamete",
                        ulr : urlFisica
                        //usuario : usuarioActualizado,
                        //tarea : tareaActualizada
                }); */
                return res.sendFile(path.resolve(urlFisica));
            } else {

                return res.sendFile(path.resolve("./public/fotos/default.jpg"));
            }
        })
        /* return res.status(200).json({
            status: "success",
                mensaje: "Todo se ha modificado correctamete",
                ulr : urlFisica
                //usuario : usuarioActualizado,
                //tarea : tareaActualizada
        }); */
    });
};


/**
 * Formato cantidades: [{menu: "ID menu", cantidad: "cantidad menu"}]
 * @param {*} req 
 * @param {*} res 
 */
const actualizarCantidades = (req, res) => {
    let idTarea = req.params.idTarea;
    let cantidades = req.body.cantidades;

    Tarea.findById(
        { _id: idTarea },
        (error, tarea) => {
            if (error || !tarea) {
                return res.status(404).json({
                    status: "error",
                    mensaje: "La tarea no existe"
                });
            }

            let menus = tarea.menus;

            let salir = false;
            //actualizar cantidad de los menus
            for (let i = 0; i < cantidades.length; i++) {
                for (let j = 0; j < menus.length && !salir; j++) {
                    if (menus[j].menu.toString() === cantidades[i].menu) {
                        menus[j].cantidad = Number(menus[j].cantidad)
                        menus[j].cantidad += Number(cantidades[i].cantidad);
                        salir = true;
                    }
                }

                if (!salir) {
                    menus.push(cantidades[i]);
                }
                salir = false;
            }

            //actualizar la tarea
            Tarea.findByIdAndUpdate(
                { _id: idTarea },
                {
                    $set: {
                        menus: menus
                    }
                },
                { lean: true, new: true },
                (error, tareaActualizada) => {
                    if (error || !tareaActualizada) {
                        return res.status(404).json({
                            status: "error",
                            mensaje: "La tarea no se ha actualizado"
                        });
                    }

                    return res.status(200).json({
                        status: "success",
                        mensaje: "Todo se ha modificado bien",
                        tarea: tareaActualizada
                    });
                }
            );
        }
    );


};


const setRealizada = (req, res) => {
    let idTarea = req.params.idTarea;

    Tarea.findByIdAndUpdate(
        { _id: idTarea },
        { $set: { realizada: true } },
        { new: true },
        (error, tareaActualizada) => {
            if (error || !tareaActualizada) {
                return res.status(404).json({
                    status: "error",
                    mensaje: "La tarea no se ha actualizado"
                });
            }
            return res.status(200).json({
                status: "success",
                mensaje: "Todo se ha modificado correctamete",
            });
        }
    );

};

const setEstadoCompletada = (req, res) => {

    let idTarea = req.body.idTarea;

    Tarea.findById
        (
            { _id: idTarea },
            (error, tarea) => {
                if (error || !tarea) {
                    return res.status(404).json({
                        status: "error",
                        mensaje: "La tarea no existe"
                    });
                }
                else {
                    Tarea.findOneAndUpdate({ _id: idTarea }, { $set: { estado: "completada" } }, (err, doc) => {
                        if (err || !doc) {
                            return res.status(404).json({
                                status: "error",
                                mensaje: err
                            });
                        }
                        else {
                            return res.status(200).json({
                                status: "success",

                                mensaje: "Todo se ha modificado correctamete",
                            });
                        }
                    })
                }
            }
        );
};

const crearTareaMaterial = (req, res) => {

    //Recoger parametros por post
    let parametros = req.body;
    parametros.tipo = 'entregaMateriales'
    parametros.tipoInstrucciones = "texto";
    let nombreprofesor = "";
    //Obtengo el profesor
    Usuario.findById
        ({ _id: parametros.entregamateriales.idProfesor }, (error, usuario) => {
            if (error || !usuario) {
                return res.status(404).json({
                    status: "error",
                    mensaje: "El usuario no existe"
                });
            }

            nombreprofesor = usuario.nombre;


            parametros.nombre = "Tarea de " + nombreprofesor;
            parametros.descripcion = "Tarea de materiales";

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

                //Asigno tarea al alumno
                let idTarea = tareaGuardada._id;
                let idAlumno = tareaGuardada.usuarioAsignado;

                //actualizar tarea
                Tarea.findByIdAndUpdate({ _id: idTarea },
                    {
                        $set: {                             //Para actualizar valores concretos se debe usar set
                            estado: 'asignada',
                            usuarioAsignado: idAlumno,
                            fechaAsignada: Date.now()
                        }
                    },
                    { lean: true, new: true },
                    (error, tareaActualizada) => {
                        if (error || !tareaActualizada) {
                            return res.status(404).json({
                                status: "error",
                                mensaje: "La tarea no se ha actualizado"
                            });
                        }
                        //tareaActualizada = tareaActualizada;
                        //actualizar alumno
                        Usuario.findByIdAndUpdate({ _id: idAlumno },
                            {
                                $push: {                            //Introduce un nuevo elemento en un array
                                    tareasAsignadas: idTarea
                                }
                            },
                            { lean: true, new: true },
                            (error, usuarioActualizado) => {
                                if (error || !usuarioActualizado) {
                                    return res.status(404).json({
                                        status: "error",
                                        mensaje: "El usuario no se ha actualizado"
                                    });
                                }
                                return res.status(200).json({
                                    status: "success",
                                    mensaje: "Todo se ha modificado bien",
                                    usuario: usuarioActualizado,
                                    tarea: tareaActualizada
                                });
                                //usuarioActualizado = usuarioActualizado;
                            });
                    });


            });

        });


}

//Obtener tareas de tipo entregamaterial de un profesor concreto
const getTareasEntregaMaterial = (req, res) => {
    let idProfesor = req.params.idProfesor;
    Tarea.find({ tipo: 'entregaMateriales', "entregamateriales.idProfesor": idProfesor }, (error, tareas) => {
        if (error || !tareas) {
            return res.status(404).json({
                status: "error",
                mensaje: "No hay tareas"
            });
        }
        return res.status(200).json({
            status: "success",
            mensaje: "Tareas encontradas",
            tareas: tareas
        });
    });
}


const completarClaseComanda = (req, res) => {
    const aula = req.body.aula;
    const idTarea = req.body.idTarea;

    Tarea.findByIdAndUpdate(idTarea, { $pull: { aulasRestantes: aula } }, (err, out) => {
        if (err || !out) {
            return res.status(404).json({
                status: "error",
                mensaje: "La tarea no ha sido actualizada"
            });
        }

        else {
            return res.status(200).json({
                status: "success",
                mensaje: "Tareas actualizada",
            });
        }
    });
};

const getAulasRestantes = (req, res) => {
    const idTarea = req.params.idTarea;

    Tarea.findById(idTarea, (err, out) => {
        if (err || !out) {
            return res.status(404).json({
                status: "error",
                mensaje: "La tarea no existe"
            })
        }
        else {
            Usuario.find({ rol: "Profesor", clase: { $in: out.aulasRestantes } }, (err, clases) => {
                if (err || !clases) {
                    return res.status(404).json({
                        status: "error",
                        mensaje: "No hay clases"
                    })
                }
                else {
                    return res.status(200).json({
                        status: "success",
                        mensaje: "Tarea encontrada",
                        aulasRestantes: clases.map((i) => { return { clase: i.clase, id: i._id } })
                    })
                }
            })
        }
    });
}


module.exports = {
    listaTareas,
    crearTarea,
    eliminarTarea,
    asignarTarea,
    desasignarTarea,
    obtenerTarea,
    obtenerTareasUsuario,
    obtenerFoto,
    actualizarCantidades,
    setRealizada,
    setEstadoCompletada,
    crearTareaMaterial,
    getTareasEntregaMaterial,
    completarClaseComanda,
    getAulasRestantes
}