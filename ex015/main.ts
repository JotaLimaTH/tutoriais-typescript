// Parâmetros rest

class Produtos {
    public exibirProdutos(... produtos: string[]): void {
        for (const produto of produtos) {
            console.log(produto)
        }
    }
}

const departamentoInformatica: Produtos = new Produtos();
console.log("Todos os produtos do de departamento de informática disponíveis no estoque")

departamentoInformatica.exibirProdutos('Mouse', 'Notebook', 'Teclado', 'Carregador')

function somar(... numeros: number[]): number {
    let total = 0;
    numeros.forEach((numero) => (total += numero))
    return total
}