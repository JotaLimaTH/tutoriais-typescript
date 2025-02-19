"use strict";
const saudar = (mensagem) => {
    return mensagem;
};
console.log(saudar("Olá, amigo."));
// Function constructor
const saudar_2 = new Function('mensagem', 'return "Fala " + mensagem');
console.log(saudar_2('Galera!'));
