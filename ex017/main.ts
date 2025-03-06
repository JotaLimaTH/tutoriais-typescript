class Estudante {
    codigoEstudante: number;
    nomeEstudante: string;

    constructor(codigoEstudante: number, nomeEstudante: string) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante
    }

    toString(): string {
        return `Aluno: ${this.nomeEstudante}\nMatrícula:  ${this.codigoEstudante}`
    }
}

const estudanteJoao = new Estudante(2224560, "João Marcos")
console.log(`${estudanteJoao}`)