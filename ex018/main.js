"use strict";
class Funcionario {
    constructor(dataNascimento) {
        this.dataNascimento = dataNascimento;
    }
}
const funcionario_1 = new Funcionario(new Date(2002, 10, 20));
console.log(funcionario_1.dataNascimento);
//funcionario_1.dataNascimento = newDate(2004, 5, 10)
// O código dá erro, pois é readonly
