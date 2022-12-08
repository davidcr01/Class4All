const Usuario = require("../modelos/Usuario");
const Cookies = require("universal-cookie");
const fs = require('fs');
const path = require('path');

const cookies = new Cookies();

const crear = (req, res) => {
    
    //Recoger parametros por post
    let parametros = req.body;
    //Validar datos ?
    //console.log(parametros.nombre);

    //Crear objeto 
    const usuario = new Usuario(parametros);        //se asignan los parametros de manera automática si coinciden el nombre
    
    //Asignar valores al objeto
    /* De forma manual
        usuario.nombre = parametros.nombre;
        ...
    
    */

    //Guardar el objeto en la base de datos
    usuario.save((error,usuarioGuardado) => {
        if(error || !usuarioGuardado){
            return res.status(404).json({
                status:"error",
                mensaje:"El usuario no se ha guardado"
            });
        }
        return res.status(200).json({
            status:"success",
            usuario:usuarioGuardado,
            mensaje:"El usuario se ha guardado correctamente"
        });

    }); 

}


const listar = (req, res) => {

    let listaUser = Usuario.find({}).exec((error, usuarios) => {
        if (error || !usuarios){
            return res.status(404).json({
                status:"error",
                mensaje:"No hay usuarios que listar"
            });
        }
        return res.status(200).json({
            status: "success",
            usuarios: usuarios
        });
    });  
};

const obtenerUsuarioId = (req, res) => {
    let id = req.params.id;
    Usuario.findById(id).exec((error, usuario) => {
        if (error || !usuario){
            return res.status(404).json({
                status:"error",
                mensaje:"No se ha encontrado el usuario"
            });
        }
        return res.status(200).json({
            status: "success",
            usuario: usuario
        });
    });
};


const loginUsuario = (req, res) => {
    let correo = req.body.correo;
    //let contra = req.params.contra;

    Usuario.find({correo: correo, rol: {$in: ["Profesor", "Administrador"]}}).exec((error, usuario) => {

        if (error || usuario.length === 0){
            return res.status(404).json({
                status:"error",
                mensaje:"No se ha encontrado el usuario2"
            });
        }

        const randID = Math.floor(Math.random() * 10000000);    //Mejorable
        cookies.set("user"+randID, {id: usuario[0]._id, token: randID, rol: usuario[0].rol}, {path: "/", maxAge: 86400});

        const usuarioData = {_id: usuario[0]._id, rol: usuario[0].rol}

        console.log(cookies.getAll());

        return res.status(200).json({
            status: "success",
            usuario: usuarioData,
            sessionID: randID
        });
    });
}

const loginAlumno = (req, res) => {
    let id = req.body.id;

    Usuario.findById(id).exec((error, usuario) => {
        if (error || !usuario){
            return res.status(404).json({
                status:"error",
                mensaje:"No se ha encontrado el usuario2"
            });
        }

        const randID = Math.floor(Math.random() * 10000000);    //Mejorable
        cookies.set("user"+randID, {id: usuario._id, token: randID, rol: usuario.rol}, {path: "/", maxAge: 86400});

        const usuarioData = {_id: usuario._id, rol: usuario.rol}

        console.log(cookies.getAll());

        return res.status(200).json({
            status: "success",
            usuario: usuarioData,
            sessionID: randID
        });
    });
}

const logoutUsuario = (req, res) => {
   
    if(cookies.get("user"+req.body.id) !== undefined){
        cookies.remove("user"+req.body.id);
        
        console.log(cookies.getAll());

        return res.status(200).json({
            status: "success",
        });
    }
    else{
        return res.status(404).json({
            status: "error",
        });        
    }

}

const obtenerCookie = (req, res) => {
    const sessionID = req.params.sessionID;
    const id = req.params.userID;
    const rol = req.params.rol; 


    if(cookies.get("user"+sessionID) === undefined || cookies.get("user"+sessionID).id !== id || cookies.get("user"+sessionID).rol !== rol)
        return res.status(404).json({
            status: "error"
        });
    else
        return res.status(200).json({
            status: "success"
        });
}

const getAulas = (callBack) =>{
    Usuario.find({rol: "Profesor"}).exec(callBack);
}

const getAulasRuta = (req, res) => {
    getAulas((error, query) => {
        if (error || query.length == 0 || !query) {
            return res.status(404).json({
                status: "error",
                mensaje: "No hay profesores :("
            });
        }
        return res.status(200).json({
            status: "success",
            aulas: query.map((profesor) => { return { clase: profesor.clase, id: profesor._id } })
        });
    })
};


const getAlumnos = (req, res) => {
    let aula = req.params.aula;

    Usuario.find({rol: "Alumno", clase: aula}).exec((error, query) => {
        if (error || query.length == 0 || !query) {
            return res.status(404).json({
                status: "error",
                mensaje: "No hay alumnos :("
            });
        }
        return res.status(200).json({
            status: "success",
            alumnos: query.map((i) => {return {clase: i.clase, _id: i._id, nombre: i.nombre}})
        });
    });    
}

const getTodosAlumnos = (req, res) => {
    Usuario.find({rol: "Alumno"}).exec((error, query) => {
        if (error || query.length == 0 || !query) {
            return res.status(404).json({
                status: "error",
                mensaje: "No hay alumnos :("
            });
        }
        return res.status(200).json({
            status: "success",
            alumnos: query.map((i) => {return {clase: i.clase, _id: i._id, nombre: i.nombre}})
        });
    });
}



const obtenerFoto = (req, res) => {
    let id = req.params.id;

    Usuario.findById(id).exec((error, response) => {
        if (error || !response) {
            return res.status(404).json({
                status: "error",
                mensaje: "La foto de perfil no existe"
            });
        }
        let foto = response.foto;
        let urlFisica = "./public/fotos/" + foto;
        fs.stat(urlFisica,(error,existe) => {
            if(existe){
                return res.sendFile(path.resolve(urlFisica));
            }else{
                
               return res.sendFile(path.resolve("./public/fotos/default.jpg"));
            }
        })
    });    
}

const eliminarUsuario = (req, res) => {
    let id = req.params.id;

    //Encuentro el usuario y borro su foto
    Usuario.findById(id, (error, usuario) => {
        if(error || !usuario){
            return res.status(404).json({
                status: "error",
                mensaje: "No se ha podido encontrar el usuario"
            });
        }
        
        let foto = usuario.foto;
        let urlFisica = "./public/fotos/" + foto;
        fs.unlink(urlFisica, (err) => {
            if (error) {
                console.log("public/" + usuario.foto + " no se ha podido eliminar");
                throw err;
            }
        })
    });

    //Borro el usuario  
    Usuario.findByIdAndDelete(id, (err, query) => {
        if(err || !query){
            return res.status(404).json({
                status: "error",
                mensaje: "No se ha eliminado el usuario"
            })
        }
        else{
            return res.status(200).json({
                status: "success",
                mensaje: "El usuario ha sido eliminado correctamente"
            })
        }
    })
}

const subirFoto = (req, res) => {
    console.log(req.file);
 };
 

module.exports = {
    crear,
    listar,
    obtenerUsuarioId,
    loginUsuario,
    obtenerCookie,
    logoutUsuario,
    getAulasRuta,
    getAlumnos,
    loginAlumno,
    obtenerFoto,
    getTodosAlumnos,
    getAulas,
    eliminarUsuario,
    subirFoto
}