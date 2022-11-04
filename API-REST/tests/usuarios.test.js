const mongoose = require('mongoose');
const crearServidor = require('../crearServidor');
const {conexionTest} = require('../basedatos/conexionTests');
const Usuario = require("../modelos/Usuario");
const request = require('supertest');


beforeEach((done) => {
    conexionTest();
    done();
});

afterEach((done) => {
    Usuario.deleteMany({}).then(() => done());
    mongoose.connection.close();
    mongoose.disconnect();
    done();
});

const app = crearServidor();


describe('Test de usuarios', () => {
    test('Debería mostrar todos los usuario', async () => {
        await request(app).get('/api/usuarios/listar-usuarios').expect(200);
    });
});
   
