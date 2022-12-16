const mongoose = require('mongoose');
const crearServidor = require('../crearServidor');
const {conexionTest} = require('../basedatos/conexionTests');
const Usuario = require("../modelos/Usuario");
const request = require('supertest');

beforeAll((done) => {
    mongoose.connect("mongodb+srv://test:test@c4a-test.97v4qpm.mongodb.net/?retryWrites=true&w=majority",done);
});

afterAll((done) => {
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
        await request(app).get('/api/usuarios/lista-usuarios').expect(200);
    });

    test('Debería mostrar un usuario por su id', async () => {
        let usuario = await Usuario.create({
            nombre: "nombre",
            apellido1: "apellido1",
            apellido2: "apellido2",
            rol: "Alumno",
            foto: "foto",
            clase: "clase"
        });

        await request(app).get('/api/usuarios/get-usuario/'+usuario._id).expect(200).then(async (response) => {
            expect(response.body.status).toBe('success');
            expect(response.body.usuario.nombre).toBe("nombre");
            expect(response.body.usuario.apellido1).toBe("apellido1");
            expect(response.body.usuario.apellido2).toBe("apellido2");
            expect(response.body.usuario.rol).toBe("Alumno");
            expect(response.body.usuario.foto).toBe("foto");
            expect(response.body.usuario.clase).toBe("clase");
        });
    });

    test('Debería enviar la foto de un usuario', async () => {
        let usuario = await Usuario.create({
            nombre: "nombre",
            apellido1: "apellido1",
            apellido2: "apellido2",
            rol: "Alumno",
            foto: "foto",
            clase: "clase"
        });

        await request(app).get('/api/usuarios/get-foto/'+usuario._id).expect(200).then(async (response) => {
            //expect(response.headers['Content-Type']).toBe('image/*');
            expect(response.headers['content-type']).toBe('image/jpeg');
        });
    });
    
});
   
