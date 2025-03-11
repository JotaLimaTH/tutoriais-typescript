"use strict";
class Retangulo {
    constructor(largura, altura) {
        this._largura = largura;
        this._altura = altura;
    }
    get areaRetangulo() {
        return this._altura * this._largura;
    }
    get perimetroRetangulo() {
        return this._altura * 2 + this._largura * 2;
    }
}
class Estudante {
    constructor(nome, curso) {
        this._semestre = 1;
        this._nome = nome;
        this._curso = curso;
    }
    get nomeEstudante() {
        return this._nome;
    }
    get semestreEstudante() {
        return this._semestre;
    }
    get cursoEstudante() {
        return this._curso;
    }
}
const retangulo_1 = new Retangulo(5, 2);
console.log("Área do retângulo: ", retangulo_1.areaRetangulo);
console.log("Perímetro do retângulo: ", retangulo_1.perimetroRetangulo);
const aluno = new Estudante("Mario", "Sistemas e Mídias Digitais");
console.log(`${aluno.nomeEstudante}\n${aluno.cursoEstudante}\n${aluno.semestreEstudante}`);
