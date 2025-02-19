"use strict";
// Parâmetros default
console.log(descontoCompra(100));
console.log(exibirMensagem('Mateus'));
function descontoCompra(preco, desconto = 0.08) {
    return preco * (1 - desconto);
}
function exibirMensagem(nome, saudar = 'Eae beleza') {
    return `${saudar} ${nome}`;
}
