"use strict";
informarDadosPessoa(20, "João Rubens");
informarDadosPessoa(124, "Super Homem", "superman@gmail.com");
function informarDadosPessoa(idPessoa, nome, email) {
    console.log(`Id funcionário: ${idPessoa}\nNome: ${nome}`);
    if (email != undefined)
        console.log(`E-mail: ${email}`);
}
