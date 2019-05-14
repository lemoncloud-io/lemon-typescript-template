import { sayHello, sum } from './index';

describe('Test libs func', () => {
    it('It should say Hello test', () => {
        expect(sayHello('test')).toBe('Hello test');
        expect(sayHello('louis')).toBe('Hello louis');
    });

    it('It should calculate sum value', () => {
        const case1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(sum(case1)).toBe(55);

        const case2 = [1, 2, 3];
        expect(sum(case2)).toBe(6);
    });
});
