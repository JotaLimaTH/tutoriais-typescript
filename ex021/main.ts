class Funcionario {
    static contratacoes = 0;

    private nome: string;
    private sobrenome: string;
    private titulo: string;

    constructor(nome: string, sobrenome: string, titulo: string){
        Funcionario.contratacoes++;

        this.nome = nome
        this.sobrenome = sobrenome
        this.titulo = titulo
    }
}

const funcionario_1 = new Funcionario("João", "Marcos", "Programador")
const funcionario_2 = new Funcionario ("Joseph", "Ratzinger", "Papa")
const funcionario_3 = new Funcionario("Tom", "Wright", "Anglicano")

console.log(Funcionario.contratacoes)

type Raca = 'Pinscher' | 'Buldogue' | 'Basset' | 'Yorkshire'

class Cachorro {
    public nome: string;
    public idade: number;
    public racas: Raca[];
    public static qtd_cachorro_vendido = 0;

    constructor(nome: string, idade: number, racas: Raca[]){
        this.nome = nome
        this.idade = idade;
        this.racas = racas;

        Cachorro.qtd_cachorro_vendido++;
        console.log(Cachorro.qtd_cachorro_vendido)
    }

    public exibirInformaçao(): void {
        console.log(`Nome do cachorro: ${this.nome}\nRaça: ${this.racas}\nIdade: ${this.idade}`)
    }
}

const thor = new Cachorro("Thor", 5, ['Basset'])
const farofa = new Cachorro("Farofa", 4, ["Buldogue"])

thor.exibirInformaçao()
farofa.exibirInformaçao()
console.log(Cachorro.qtd_cachorro_vendido)