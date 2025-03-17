function exibirPrecoFinal(preco: number, desconto: number, formato: boolean): number | string {
    const precoComDesconto = preco * (1 - desconto)

    return formato ? `R$ ${precoComDesconto}` : precoComDesconto;
}

const descontoFinal = exibirPrecoFinal(100, 0.1, true) as string;

console.log(descontoFinal)

interface Humano {
    nome: string;
    idade: number;
    idioma: string;
}

const humano = {idade: 36, idioma: 'Espanhol'}
const humano_2 = humano as Humano;
console.log(humano_2.nome)