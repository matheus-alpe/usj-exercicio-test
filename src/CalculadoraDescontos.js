class CalculadoraDescontos {

    calcular(valorCompra) {
        if (valorCompra >= 500) return valorCompra * 0.9
        return valorCompra
    }
}

module.exports = CalculadoraDescontos