"use strict";
// Parâmetros rest
class Produtos {
    exibirProdutos(...produtos) {
        for (const produto of produtos) {
            console.log(produto);
        }
    }
}
const departamentoInformatica = new Produtos();
console.log("Todos os produtos do de departamento de informática disponíveis no estoque");
departamentoInformatica.exibirProdutos('Mouse', 'Notebook', 'Teclado', 'Carregador');
function somar(...numeros) {
    let total = 0;
    numeros.forEach((numero) => (total += numero));
    return total;
}
