const mongoose = require('mongoose');
const crearServidor = require('../crearServidor');
const {conexionTest} = require('../basedatos/conexionTests');
const Usuario = require("../modelos/Usuario");
const request = require('supertest');
const TareasDia = require('../modelos/TareasDia');


beforeEach((done) => {
    //conexionTest();
    //done();
    mongoose.connect("mongodb+srv://test:test@c4a-test.97v4qpm.mongodb.net/?retryWrites=true&w=majority",()=>done());
});

afterEach((done) => {
    Usuario.deleteMany({}).then(() => done());
    mongoose.connection.close();
    mongoose.disconnect();
    done();
});

const app = crearServidor();


describe('Test de usuarios', () => {
    
    test('Debería crear un nuevo usuario', async () => {
        

        await request(app).post('/api/usuarios/crear-usuario').send({
            nombre: "nombre",
            apellido1: "apellido1",
            apellido2: "apellido2",
            rol: "Alumno",
            foto: "foto",
            clase: "clase"
        }).expect(200).then(async (response) => {
            expect(response.body.status).toBe('success');

            expect(response.body.usuario.nombre).toBe("nombre");
            expect(response.body.usuario.apellido1).toBe("apellido1");
            expect(response.body.usuario.apellido2).toBe("apellido2");
            expect(response.body.usuario.rol).toBe("Alumno");
            expect(response.body.usuario.foto).toBe("foto");
            expect(response.body.usuario.clase).toBe("clase");
        });
    });
    
    test('Debería mostrar todos los usuario', async () => {
        await request(app).get('/api/usuarios/listar-usuarios').expect(200);
    });
});
   
