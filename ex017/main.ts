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

class ContaBacaria {
    public nome: string; 
    private saldo: number;
    private senha?: number;
    
    constructor(nome: string) {
        this.nome = nome
        this.saldo = 0
    }

    definirSenha(novaSenha: number){
        if (this.senha === null){
            this.senha = novaSenha
            return
        }
        console.log("Essa conta já possui senha.")
    }

    alterarSenha(senhaAntiga: number, novaSenha: number) {
        if (this.senha === senhaAntiga){
            this.senha = novaSenha
            return
        }
        console.log("Não foi possível alterar a senha.")
    }
}

/*const estudanteJoao = new Estudante(2224560, "João Marcos")
console.log(`${estudanteJoao}`)*/

const contaNova = new ContaBacaria("Mario")
