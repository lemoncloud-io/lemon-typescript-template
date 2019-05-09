import app from '../src/app';
import request from 'supertest';

describe('App', (): void => {
    it('should test the app', (): void => {
        expect('app').toBe('app');
    });
});

describe('Test the route path', (): void => {
    it('It should response the GET method', (done): void => {
        request(app)
            .get('/hello')
            .then(
                (res: any): void => {
                    expect(res.statusCode).toBe(200);
                    done();
                },
            );
    });

    it('It should response 404', (done): void => {
        request(app)
            .get('/should_return_error')
            .then(
                (res: any): void => {
                    expect(res.statusCode).toBe(404);
                    done();
                },
            );
    });
});
