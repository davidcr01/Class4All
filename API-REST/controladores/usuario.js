const Usuario = require("../modelos/Usuario");
//import Cookies from 'universal-cookie';
const Cookies = require("universal-cookie");


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
const cookies = new Cookies();

const loginUsuario = (req, res) => {
    let correo = req.body.correo;
    //let contra = req.params.contra;
    console.log(correo);

    Usuario.find({correo: correo}).exec((error, usuario) => {
        if (error || usuario.length === 0){
            return res.status(404).json({
                status:"error",
                mensaje:"No se ha encontrado el usuario2"
            });
        }

        //const cookies = new Cookies();
        //console.log(usuario[0]._id.toString())
        const randID = Math.floor(Math.random() * 10000000);    //Mejorable
        cookies.set("user"+randID, randID, {path: "/", maxAge: 86400});

        console.log(cookies.getAll());


        return res.status(200).json({
            status: "success",
            usuario: usuario[0],
            sessionID: randID
        });
    });
}

const logoutUsuario = (req, res) => {
    //const cookies = new Cookies();
    
    
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
    let id = req.params.id;

    //const cookies = new Cookies();
    //console.log("id: "+id);
    //console.log(cookies.getAll());


    if(cookies.get("user"+id) === undefined)
        return res.status(404).json({
            status: "error"
        });
    else
        return res.status(200).json({
            status: "success"
        });
}

const getAulas = (req, res) => {
    Usuario.find({rol: "Profesor"}).exec((error, query) => {
        if (error || query.length == 0 || !query) {
            return res.status(404).json({
                status: "error",
                mensaje: "No hay profesores :("
            });
        }
        return res.status(200).json({
            status: "success",
            aulas: query.map((profesor) => {return {clase: profesor.clase, foto: profesor.foto}})
        });
    });
};

module.exports = {
    prueba,
    datosEmpresa,
    crear,
    listar,
    obtenerUsuarioId,
    loginUsuario,
    obtenerCookie,
    logoutUsuario,
    getAulas
}