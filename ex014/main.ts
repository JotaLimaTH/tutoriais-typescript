// Parâmetros default

console.log(descontoCompra(100))
console.log(exibirMensagem('Mateus'))

function descontoCompra(preco: number, desconto = 0.08): number {
    return preco * (1 - desconto)
}

function exibirMensagem(nome: string, saudar = 'Eae beleza'): string {
    return `${saudar} ${nome}`
}