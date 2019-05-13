import { sayHello, sum } from './index';

describe('Test libs func', () => {
    it('It should say Hello test', () => {
        expect(sayHello('test')).toBe('Hello test');
    });

    it('It should calculate sum', () => {
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const expected = 55;
        expect(sum(list)).toBe(expected);
    });
});
