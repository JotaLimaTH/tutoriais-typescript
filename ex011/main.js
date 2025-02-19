"use strict";
function onboarding(pessoa) {
    return (`Seja bem vindo ${pessoa.nome}! Sua função na empresa será ${pessoa.funcao}.\nSeu email é ${pessoa.email}`);
}
console.log(onboarding({ nome: "Paulo Vitor", funcao: "Programador", email: "joaozinhodomotor@yahoo.com" }));
const filha = { nome: "Eliane", sobrenome: "Sousa", idade: 14 };
