import app from '../../app';
import request from 'supertest';

describe('hello-js', () => {
    it('should be tested on hello-js', () => {
        expect('hello-js').toBe('hello-js');
    });
});

describe('Test the JS route', () => {
    it('It should response the GET method', done => {
        request(app)
            .get('/js/hello')
            .then(res => {
                expect(res.statusCode).toBe(200);
                done();
            });
    });
});
