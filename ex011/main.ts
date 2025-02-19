interface Pessoa {
    nome: string;
    funcao: string;
    readonly email: string;
}

interface Mae {
    nome: string;
}

interface Pai {
    sobrenome: string;
}

interface Filha extends Mae, Pai {
    idade: number;
}

function onboarding(pessoa: Pessoa) {
    return (
        `Seja bem vindo ${pessoa.nome}! Sua função na empresa será ${pessoa.funcao}.\nSeu email é ${pessoa.email}`
    )
}

console.log(onboarding({ nome: "Paulo Vitor", funcao: "Programador", email: "joaozinhodomotor@yahoo.com" }))

const filha: Filha = { nome: "Eliane", sobrenome: "Sousa", idade: 14 }