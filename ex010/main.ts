function error(message: string): never {
    throw new Error(message);
}

function rejectMessage(): never {
    return error('Erro de mensagem - 02')
}


console.log(rejectMessage())
