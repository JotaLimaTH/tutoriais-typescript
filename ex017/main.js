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
class ContaBacaria {
    constructor(nome) {
        this.nome = nome;
        this.saldo = 0;
    }
    definirSenha(novaSenha) {
        if (this.senha === null) {
            this.senha = novaSenha;
            return;
        }
        console.log("Essa conta já possui senha.");
    }
    alterarSenha(senhaAntiga, novaSenha) {
        if (this.senha === senhaAntiga) {
            this.senha = novaSenha;
            return;
        }
        console.log("Não foi possível alterar a senha.");
    }
}
const estudanteJoao = new Estudante(2224560, "João Marcos");
console.log(`${estudanteJoao}`);
const contaNova = new ContaBacaria("Mario");
