class Animal {
    especie: string
    nome: string
    
    constructor(especie: string, nome: string) {
        this.especie = especie
        this.nome = nome
    }
    mover(distancia = 0) {
        console.log(`${this.especie} se moveu ${distancia} metros.`)
    }
}

class Cachorro extends Animal {
    constructor(nome: string){
        super("Cachorro", nome)
    }
    latir() {
        console.log('Au!')
    }
}

const cachorro = new Cachorro("Ronaldo");
cachorro.latir()
cachorro.mover(5)