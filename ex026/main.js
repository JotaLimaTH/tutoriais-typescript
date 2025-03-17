"use strict";
function exibirPrecoFinal(preco, desconto, formato) {
    const precoComDesconto = preco * (1 - desconto);
    return formato ? `R$ ${precoComDesconto}` : precoComDesconto;
}
const descontoFinal = exibirPrecoFinal(100, 0.1, true);
console.log(descontoFinal);
const humano = { idade: 36, idioma: 'Espanhol' };
const humano_2 = humano;
console.log(humano_2.nome);
