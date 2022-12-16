const mongoose = require('mongoose');
const crearServidor = require('../crearServidor');
const Tarea = require("../modelos/TareasDia");
const Usuario = require("../modelos/Usuario");
const request = require('supertest');


beforeAll((done) => {
    mongoose.connect("mongodb+srv://test:test@c4a-test.97v4qpm.mongodb.net/?retryWrites=true&w=majority", done);
});

afterAll((done) => {
    Tarea.deleteMany({}).then(() => done());
    Usuario.deleteMany({}).then(() => done());
    mongoose.connection.close();
    mongoose.disconnect();
    done();
});

const app = crearServidor();

describe('Test de tareas', () => {
    
    
    test('Debería listar todas las tareas', async () => {
        await request(app).get('/api/tareas/lista-tareasDia').expect(200);
    });


    test('Debería eliminar una tarea existente', async () => {
        let tareaEliminar = await Tarea.create({
            estado: "sinAsignar",
            nombre: "nombre",
            descripcion: "descripcion",
            tipoInstrucciones: "texto",
        });

        await request(app).delete('/api/tareas/eliminar-tareaDia/'+tareaEliminar._id).expect(200).then(async (response) => {
            expect(response.body.status).toBe('success');
            expect(response.body.tarea.estado).toBe("sinAsignar");
            expect(response.body.tarea.nombre).toBe("nombre");
            expect(response.body.tarea.descripcion).toBe("descripcion");
            expect(response.body.tarea.tipoInstrucciones).toBe("texto");

        });
    });



    test('Debería asignar la tarea', async () => {
        let user = await Usuario.create({
            nombre: "test",
            apellido1: "test",
            apellido2: "test",
            rol : "Administrador",
            foto : "test",
            clase : "test",
        });

        let tareaTest = await Tarea.create({
            nombre: "test",
            descripcion: "test",
            tipoInstrucciones: "texto",
            instruccionTexto: "test",
        });


        await request(app).put('/api/tareas/asignar-tarea/'/*+ tareaTest._id+'/'+user._id*/)
        .send({idTarea: tareaTest._id, idAlumno: user._id})
        .expect(200).then(async (response) => {
            expect(response.body.status).toBe('success');
            tareaTest = await Tarea.findById(tareaTest._id);
            
            let userAsigned = tareaTest.usuarioAsignado.toString();

            expect(userAsigned).toBe(user._id.toString());
            expect(tareaTest.estado).toBe('asignada');
           
        });
    });

    test('Debería desasignar la tarea', async () => {
        let user = await Usuario.create({
            nombre: "test",
            apellido1: "test",
            apellido2: "test",
            rol : "Administrador",
            foto : "test",
            clase : "test",
        });

        let tareaTest = await Tarea.create({
            nombre: "test",
            descripcion: "test",
            tipoInstrucciones: "texto",
            instruccionTexto: "test",
        });

        //idTarea = tareaTest._id;

        await request(app).put('/api/tareas/asignar-tarea/')
        .send({idTarea: tareaTest._id, idAlumno: user._id})
        .expect(200);

        await request(app).put('/api/tareas/desasignar-tarea/'+ tareaTest._id).expect(200).then(async (response) => {
            expect(response.body.status).toBe('success');
            tareaTest = await Tarea.findById(tareaTest._id);
            
            let userAsigned = tareaTest.usuarioAsignado;

            expect(userAsigned).toBe(null);
            expect(tareaTest.estado).toBe('sinAsignar');
           
        });
    });

    test('Debería sacar la foto de la tarea', async () => {
        let tareaTest = await Tarea.create({
            nombre: "test",
            descripcion: "test",
            tipoInstrucciones: "texto",
            instruccionTexto: "test",
        });

        await request(app).get('/api/tareas/get-foto/'+ tareaTest._id).expect(200).then(async (response) => {
           expect(response.headers['content-type']).toBe('image/jpeg');
           
        });
    });

    test('Debería obtener la tarea por su id', async () => {
        let tareaTest = await Tarea.create({
            nombre: "test",
            descripcion: "test",
            tipoInstrucciones: "texto",
            instruccionTexto: "test",
        });

        await request(app).get('/api/tareas/get-tarea/'+ tareaTest._id).expect(200).then(async (response) => {
            expect(response.body.status).toBe('success');
            expect(response.body.tarea.nombre).toBe("test");
            expect(response.body.tarea.descripcion).toBe("test");
            expect(response.body.tarea.tipoInstrucciones).toBe("texto");
            expect(response.body.tarea.instruccionTexto).toBe("test");
           
        });
    });

    test('Debería obtener todas las tareas de un alumno por su id', async () => {
        let user = await Usuario.create({
            nombre: "test",
            apellido1: "test",
            apellido2: "test",
            rol : "Alumno",
            foto : "test",
            clase : "test",
        });

        let tareaTest = await Tarea.create({
            nombre: "test",
            descripcion: "test",
            tipoInstrucciones: "texto",
            instruccionTexto: "test"
        });

        await request(app).put('/api/tareas/asignar-tarea/')
        .send({idTarea: tareaTest._id, idAlumno: user._id})
        .expect(200);
        
        await request(app).get('/api/tareas/tareas-usuario/'+ user._id).expect(200).then(async (response) => {
            expect(response.body.status).toBe('success');
            expect(response.body.tareas[0].nombre).toBe("test");
            expect(response.body.tareas[0].descripcion).toBe("test");
            expect(response.body.tareas[0].tipoInstrucciones).toBe("texto");
            expect(response.body.tareas[0].instruccionTexto).toBe("test");
           
        });
    });
});
  
