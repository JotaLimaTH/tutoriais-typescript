// Strings

let frutas: string[] = ['Abacaxi', 'Laranja', 'Maçã', 'Melancia', 'Manga'];

frutas.forEach((index)=>{
    console.log(index)
})

console.log("O elemento [2] do array é: ", frutas[2])

let idiomas: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês']

console.log(idiomas)
idiomas.push('Mandarim')
console.log(idiomas[idiomas.length - 1])