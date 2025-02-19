"use strict";
let concluido = false;
estaConcluido();
function estaConcluido() {
    if (concluido) {
        console.log('Tarefa foi concluída com sucesso.');
        return;
    }
    console.log('A tarefa está pendente.');
}
//tsc --init inicia o projeto
//tsc compila
