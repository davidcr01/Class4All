const mongoose = require('mongoose');
const crearServidor = require('../crearServidor');
const {conexionTest} = require('../basedatos/conexionTests');
const Tarea = require("../modelos/TareasDia");
const Usuario = require("../modelos/Usuario");
const request = require('supertest');


beforeEach((done) => {
    conexionTest();
    done();
});

afterEach((done) => {
    Tarea.deleteMany({}).then(() => done());
    mongoose.connection.close();
    mongoose.disconnect();
    done();
});

const app = crearServidor();

describe('Test de tareas', () => {
    test('Debería asignar la tarea', async () => {
        const user = await Usuario.create({
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
            console.log(tareaTest);
            let userAsigned = tareaTest.usuarioAsignado.toString();
            console.log(userAsigned);
            expect(userAsigned).toBe(user._id.toString());
            //done();
        });


        
        
        
        //await request(app).get('/api/usuarios/listar-usuarios').expect(200);
    });
});