"use strict";
class Funcionario {
    constructor(nome, sobrenome, titulo) {
        Funcionario.contratacoes++;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
    }
}
Funcionario.contratacoes = 0;
const funcionario_1 = new Funcionario("João", "Marcos", "Programador");
const funcionario_2 = new Funcionario("Joseph", "Ratzinger", "Papa");
const funcionario_3 = new Funcionario("Tom", "Wright", "Anglicano");
console.log(Funcionario.contratacoes);
class Cachorro {
    constructor(nome, idade, racas) {
        this.nome = nome;
        this.idade = idade;
        this.racas = racas;
        Cachorro.qtd_cachorro_vendido++;
        console.log(Cachorro.qtd_cachorro_vendido);
    }
    exibirInformaçao() {
        console.log(`Nome do cachorro: ${this.nome}\nRaça: ${this.racas}\nIdade: ${this.idade}`);
    }
}
Cachorro.qtd_cachorro_vendido = 0;
const thor = new Cachorro("Thor", 5, ['Basset']);
const farofa = new Cachorro("Farofa", 4, ["Buldogue"]);
thor.exibirInformaçao();
farofa.exibirInformaçao();
console.log(Cachorro.qtd_cachorro_vendido);
