"use strict";
function exibirTipo(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Argumentos inválidos! Ambos os argumentos devem ser numéricos ou string.');
}
console.log(exibirTipo(5, 4), "\n", exibirTipo("Aba", "Cate"), "\n");
// exibirTipo(5, "ska"))
class Carro {
    constructor(nome, marca) {
        this.nome = nome;
        this.marca = marca;
    }
}
class Moto {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
}
function detalhesVeiculo(veiculo) {
    if (veiculo instanceof Carro) {
        return `O nome do carro é: ${veiculo.nome}, e a marca é: ${veiculo.marca}`;
    }
    return `O nome da moto é: ${veiculo.nome}, e o ano é: ${veiculo.ano}`;
}
const carro = new Carro("Relâmpago", "Marquinhos");
const moto = new Moto("Motoqueiro Fantasma", 1984);
console.log(detalhesVeiculo(carro), "\n", detalhesVeiculo(moto));
