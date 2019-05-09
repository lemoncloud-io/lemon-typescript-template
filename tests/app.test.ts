const request = require('supertest');
const app = require('../src/app');

describe('App', () => {
    it('should test the app', () => {
        expect('app').toBe('app');
    });
});

describe('Test the route path', () => {
    it('It should response the GET method', (done) => {
        request(app).get('/hello').then((res: any) => {
            expect(res.statusCode).toBe(200);
            done();
        });
    });

    it('It should response 404', (done) => {
        request(app).get('/should_return_error').then((res: any) => {
            expect(res.statusCode).toBe(404);
            done();
        });
    });
});
