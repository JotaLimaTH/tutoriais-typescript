"use strict";
function error(message) {
    throw new Error(message);
}
function rejectMessage() {
    return error('Erro de mensagem - 02');
}
console.log(rejectMessage());
