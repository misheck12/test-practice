const calculator = require('./calculator')


describe('Calculator', () => {
    describe('add', () => {
        test('should add two numbers', () => {
        expect(calculator.add(1, 2)).toBe(3);
        });
    });

    describe('subtract', () => {
        test('should subtract two numbers', () => {
        expect(calculator.subtract(1, 2)).toBe(-1);
        });
    });

    describe('multiply', () => {
        test('should multiply two numbers', () => {
        expect(calculator.multiply(1, 2)).toBe(2);
        });
    });

    describe('divide', () => {
        test('should divide two numbers', () => {
        expect(calculator.divide(1, 2)).toBe(0.5);
        });
    });

});