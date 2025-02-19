informarDadosPessoa(20, "João Rubens")
informarDadosPessoa(124, "Super Homem", "superman@gmail.com")

function informarDadosPessoa(idPessoa: number, nome: string, email?: string): void {
    console.log(`Id funcionário: ${idPessoa}\nNome: ${nome}`)
    if (email != undefined) console.log(`E-mail: ${email}`)
}