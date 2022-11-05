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
    //mongoose.disconnect();
    done();
});

const app = crearServidor();

describe('Test de tareas', () => {
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
  
