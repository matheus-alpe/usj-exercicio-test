const { expect } = require('chai');
const CalculadoraDescontos = require('../src/CalculadoraDescontos')

describe('Calcular Descontos', function() {

    describe('#calcular()', function() {
        it('should return same given value if lower then 500', function() {
            const calc = new CalculadoraDescontos()
            expect(calc.calcular(400)).to.be.equal(400);
        });

        it('should return 450 when the value is 500', function() {
            const calc = new CalculadoraDescontos()
            expect(calc.calcular(500)).to.be.equal(450);
        });

        it('should return 540 when the value is 600', function() {
            const calc = new CalculadoraDescontos()
            expect(calc.calcular(600)).to.be.equal(540);
        });
    });
});