enum Idioma {
    Portugues,
    Espanhol,
    Ingles,
    Frances,
}

enum Dia {
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM',
}

console.log(Idioma, '\n', Dia)

const enum Comida {
    Hamburguer = 'Hambúrguer',
    Massa = 'Massa',
    Pizza = 'Pizza',
    Torta = 'Torta',
    Churrasco = 'Churrasco',
}

function comida(c: Comida) {
    return 'Comidas muito apetitosas';
}

console.log(comida(Comida.Pizza))
console.log(comida(Comida.Churrasco))
