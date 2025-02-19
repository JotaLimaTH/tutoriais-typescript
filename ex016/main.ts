// Classes

class Pessoa {
    nome: string;
    sobrenome: string;

    constructor (nome: string, sobrenome: string){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa = new Pessoa('Maurício', 'de Sousa');
console.log(pessoa.nomeCompleto())