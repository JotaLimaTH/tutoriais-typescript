class Retangulo {
    private _largura: number
    private _altura: number

    constructor(largura: number, altura: number){
        this._largura = largura
        this._altura = altura
    }

    get areaRetangulo(): number {
        return this._altura * this._largura
    }
    get perimetroRetangulo(): number {
        return this._altura * 2 + this._largura * 2
    }
}

class Estudante {
    private _nome: string
    private _semestre: number = 1;
    private _curso: string;

    constructor(nome: string, curso: string) {
        this._nome = nome
        this._curso = curso
    }

    public get nomeEstudante() {
        return this._nome;
    }
    public get semestreEstudante() {
        return this._semestre
    }
    public get cursoEstudante() {
        return this._curso
    }
}

const retangulo_1 = new Retangulo(5, 2);
console.log("Área do retângulo: ", retangulo_1.areaRetangulo)
console.log("Perímetro do retângulo: ", retangulo_1.perimetroRetangulo)

const aluno = new Estudante("Mario", "Sistemas e Mídias Digitais")
console.log(`${aluno.nomeEstudante}\n${aluno.cursoEstudante}\n${aluno.semestreEstudante}`)