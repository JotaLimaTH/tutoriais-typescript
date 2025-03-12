"use strict";
class Animal {
    constructor(especie, nome) {
        this.especie = especie;
        this.nome = nome;
    }
    mover(distancia = 0) {
        console.log(`${this.especie} se moveu ${distancia} metros.`);
    }
}
class Cachorro extends Animal {
    constructor(nome) {
        super("Cachorro", nome);
    }
    latir() {
        console.log('Au!');
    }
}
const cachorro = new Cachorro("Ronaldo");
cachorro.latir();
cachorro.mover(5);
