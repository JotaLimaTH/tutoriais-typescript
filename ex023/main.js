"use strict";
const user = {
    name: "John",
    status: 'active',
    age: 20
};
function checkUserStatus(user) {
    console.log('User is activer');
    if (user.status === 'active') {
        return 'User is active';
    }
}
class Gato {
    constructor(nome, idade, estaVivo) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }
    comer(tipoComida) {
        console.log(`O gato ${this.nome} está comendo ${tipoComida}.`);
    }
}
const gato = new Gato('Garfield', 5, true);
console.log(gato);
gato.comer('Lasanha');
