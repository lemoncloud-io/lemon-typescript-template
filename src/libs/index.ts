import 'source-map-support/register';

export const sayHello = (name: string) => `Hello ${name}`;
export const sum = (list: number[]) => list.reduce((acc, val) => acc + val);
