import { sayHello, sum } from './index';

describe('Test lib func', () => {
    it('It should say Hello test', () => {
        const name = 'test';
        const expected = `Hello ${name}`;
        expect(sayHello(name)).toBe(expected);
    });

    it('It should calculate sum', () => {
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const expected = 55;
        expect(sum(list)).toBe(expected);
    });
});
