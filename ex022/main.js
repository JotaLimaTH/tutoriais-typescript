"use strict";
class Funcionario {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get retornarNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
    emitirContraCheque() {
        return `${this.retornarNomeCompleto} - Salário: ${this.retornarSalario()}`;
    }
}
//const funcionario = new Funcionario("João", "Paulo II") // Não pode criar uma instância de uma classe abstrata. Classes abstratas só podem ser EXTENDIDAS. 
class FuncionarioCLT extends Funcionario {
    constructor(nome, sobrenome, salario) {
        super(nome, sobrenome);
        this.salario = salario;
        this.salario = salario;
    }
    retornarSalario() {
        return this.salario;
    }
}
class FuncionarioPJ extends Funcionario {
    constructor(nome, sobrenome, valorHora, horasTrabalhadas) {
        super(nome, sobrenome);
        this.valorHora = valorHora;
        this.horasTrabalhadas = horasTrabalhadas;
        this.valorHora = valorHora;
        this.horasTrabalhadas = horasTrabalhadas;
    }
    retornarSalario() {
        return this.valorHora * this.horasTrabalhadas;
    }
}
const funcionario_1 = new FuncionarioCLT("João", "Paulo II", 3000);
const funcionario_2 = new FuncionarioPJ("Luigi", "Mario", 30, 200);
console.log(funcionario_1.retornarSalario());
console.log(funcionario_2.retornarSalario());
console.log(funcionario_1.emitirContraCheque());
console.log(funcionario_2.emitirContraCheque());
