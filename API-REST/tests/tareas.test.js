const mongoose = require('mongoose');
const crearServidor = require('../crearServidor');
const {conexionTest} = require('../basedatos/conexionTests');
const Tarea = require("../modelos/TareasDia");
const Usuario = require("../modelos/Usuario");
const request = require('supertest');


beforeEach((done) => {
    //conexionTest();
    mongoose.connect("mongodb+srv://test:test@c4a-test.97v4qpm.mongodb.net/?retryWrites=true&w=majority", () => done());
    //done();
});

afterEach((done) => {
    Tarea.deleteMany({}).then(() => done());
    Usuario.deleteMany({}).then(() => done());
    mongoose.connection.close();
    mongoose.disconnect();
    done();
});

const app = crearServidor();

describe('Test de tareas', () => {

    /*
    test('Debería crear una nueva tarea', async () => {
        
        await request(app).post('/api/tareas/crear-tareaDia').send({
            nombre: "nombre",
            descripcion: "descripcion",
            tipoInstrucciones: "texto",
            instruccionTexto: "instrccionTexto"
        }).expect(200).then(async (response) => {
            expect(response.body.status).toBe('success');
          //  expect(tareaCrear.tarea).toBe(tareaGuardada);
        });
    });

    test('Debería listar todas las tareas', async () => {
        await request(app).get('/api/tareas/lista-tareasDia').expect(200);
    });
    */
    
    


    test('Debería elimiar una tarea existente', async () => {
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

        //idTarea = tareaTest._id;

        await request(app).put('/api/tareas/asignar-tarea/'+ tareaTest._id+'/'+user._id).expect(200).then(async (response) => {
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

        await request(app).put('/api/tareas/asignar-tarea/'+ tareaTest._id+'/'+user._id).expect(200);

        await request(app).put('/api/tareas/desasignar-tarea/'+ tareaTest._id).expect(200).then(async (response) => {
            expect(response.body.status).toBe('success');
            tareaTest = await Tarea.findById(tareaTest._id);
            
            let userAsigned = tareaTest.usuarioAsignado;

            expect(userAsigned).toBe(null);
            expect(tareaTest.estado).toBe('sinAsignar');
           
        });
    });
});
  
