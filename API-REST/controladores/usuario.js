const Usuario = require("../modelos/Usuario");



const prueba = (req, res) => {
    console.log("Probando ruta");
    return res.status(200).json({
        mensaje: "Accion test para controlador de usuario"
    })
}

const datosEmpresa = (req, res) => {
    console.log("Probando ruta");

    /* Devolver html */
    //return res.status(200).send("<h1>Pagina de inicio</h1>");
    /* Devolver json */
    return res.status(200).send({
        app:"Class4All",
        nombreReal:"Paz Pegamento",
        nombreRealDeVerdad:"Retrasaap"

    });
}

//const listaUsuarios = null;

const crear = (req, res) => {
    
    //Recoger parametros por post
    let parametros = req.body;
    //Validar datos ?

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

const obtenerUsuarioCorreo = (req, res) => {
    let correo = req.params.correo;
    Usuario.find({correo: correo}).exec((exec, usuario) => {
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
}

module.exports = {
    prueba,
    datosEmpresa,
    crear,
    listar,
    obtenerUsuarioId,
    obtenerUsuarioCorreo
}