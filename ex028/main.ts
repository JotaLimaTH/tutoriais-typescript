type Usuario = {
    nome: string;
    endereco: string;
    telefone: string;
    idade: number;
}

/*type UsuarioOpcional = {
    nome?: string;
    endereco?: string;
    telefone?: string;
    idade?: number;
}

type UsuarioSomenteLeitura = {
    readonly nome: string;
    readonly endereco: string;
    readonly telefone: string;
    readonly idade: number;
}*/

type UsuarioMappedType = {
    [P in keyof Usuario]?: Usuario[P]; //Pega as propriedades do tipo Usuario
}

const usuarioMapped: UsuarioMappedType = {
    nome: "João",
    telefone: "96 93240-0932"
}

console.log(usuarioMapped)