abstract class Funcionario {
    constructor(private nome: string, private sobrenome: string){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    abstract retornarSalario(): number;

    get retornarNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`
    }

    emitirContraCheque(): string {
        return `${this.retornarNomeCompleto} - Salário: ${this.retornarSalario()}`
    }
}

//const funcionario = new Funcionario("João", "Paulo II") // Não pode criar uma instância de uma classe abstrata. Classes abstratas só podem ser EXTENDIDAS. 

class FuncionarioCLT extends Funcionario {
    constructor(nome: string, sobrenome: string, private salario: number){
        super(nome, sobrenome)
        this.salario = salario
    }

    retornarSalario(): number {
        return this.salario;
    }
}

class FuncionarioPJ extends Funcionario {
    constructor(nome: string, sobrenome: string, private valorHora: number, private horasTrabalhadas: number){
        super(nome, sobrenome)
        this.valorHora = valorHora
        this.horasTrabalhadas = horasTrabalhadas
    }

    retornarSalario(): number {
        return this.valorHora * this.horasTrabalhadas
    }
}

const funcionario_1 = new FuncionarioCLT("João", "Paulo II", 3000)
const funcionario_2 = new FuncionarioPJ("Luigi", "Mario", 30, 200)

console.log(funcionario_1.retornarSalario())
console.log(funcionario_2.retornarSalario())
console.log(funcionario_1.emitirContraCheque())
console.log(funcionario_2.emitirContraCheque())