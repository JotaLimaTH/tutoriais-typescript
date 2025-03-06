"use strict";
class Estudante {
    constructor(codigoEstudante, nomeEstudante) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
    toString() {
        return `Aluno: ${this.nomeEstudante}\nMatrícula:  ${this.codigoEstudante}`;
    }
}
const estudanteJoao = new Estudante(2224560, "João Marcos");
console.log(`${estudanteJoao}`);
