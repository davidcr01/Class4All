const mongoose = require('mongoose');
const crearServidor = require('../crearServidor');
const Menu = require("../modelos/Menu");
const request = require('supertest');


beforeEach((done) => {
    //conexionTest();
    mongoose.connect("mongodb+srv://test:test@c4a-test.97v4qpm.mongodb.net/?retryWrites=true&w=majority", () => done());
    //done();
});

afterEach((done) => {
    Menu.deleteMany({}).then(() => done());
    mongoose.connection.close();
    mongoose.disconnect();
    done();
});

const app = crearServidor();

describe('Test de Menus', () => {


    test('Debería listar todos los menus', async () => {
        await request(app).get('/api/menus/lista-menu').expect(200);
    });

    // test('Debería crear un menu', async () => {
    //     let menu = {
    //         nombre: "test",
    //         foto: "test",
    //     };
    //     await request(app).post('/api/menus/crear-menu').send(menu).expect(200).then(async (response) => {
    //         expect(response.body.status).toBe('success');
    //         expect(response.body.menu.nombre).toBe("test");
    //         expect(response.body.menu.foto).toBe("test");
    //     }
    //     );


    // });


    // test('Debería eliminar un menu existente', async () => {
    //     let menuEliminar = await Menu.create({
    //         nombre: "test2",
    //         foto: "test2",

    //     });



    //     await request(app).delete('/api/menus/eliminar-menu/' + menuEliminar._id).expect(200).then(async (response) => {
    //         expect(response.body.status).toBe('success');
    //         expect(response.body.menu.nombre).toBe("test2");
    //         expect(response.body.menu.foto).toBe("test2");

    //     });
    // });

});

