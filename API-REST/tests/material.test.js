const mongoose = require('mongoose');
const crearServidor = require('../crearServidor');
const Tarea = require("../modelos/TareasDia");
const Material = require("../modelos/Material");
const request = require('supertest');

beforeEach((done) => {
    mongoose.connect("mongodb+srv://test:test@c4a-test.97v4qpm.mongodb.net/?retryWrites=true&w=majority", done);
});

afterEach((done) => {
    Material.deleteMany({}).then(() => done());
    mongoose.connection.close();
    mongoose.disconnect();
    done();
});

const app = crearServidor();

describe("Test para los materiales", () =>{
    test('Debería listar todos los materiales disponibles', async () => {
        await request(app).get('/api/materials/lista-material').expect(200);
    });

    test('Debería obtener la imagen de la tarea especificada', async () => {
        let materialTest = await Material.create({
            nombre: "Lápices",
            foto: "lapiz.png"
        });
/*
        await request(app).get('/api/materials/obtenerfoto/'+materialTest._id).expect(200).then(async (response) => {
            expect(response.body.status).toBe('success');
            expect(response.body.)
        });
        */
    });
});