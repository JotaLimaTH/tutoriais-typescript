interface IUser {
    name: string;
    status: 'active' | 'inactive';
    role?: 'admin' | 'user';
    age: number;
}

const user: IUser = {
    name: "John",
    status: 'active',
    age: 20
}

function checkUserStatus(user: IUser): string | void {
    console.log('User is activer');
    if (user.status === 'active') {
        return 'User is active';
    }
}

interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;
    comer(tipoComida: string): void;
}

class Gato implements IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;

    constructor(nome: string, idade: number, estaVivo: boolean) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }

    comer(tipoComida: string) {
        console.log(`O gato ${this.nome} está comendo ${tipoComida}.`)
    }
}

const gato = new Gato('Garfield', 5, true);
console.log(gato);
gato.comer('Lasanha')