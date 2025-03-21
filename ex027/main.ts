type Pessoa = {
    nome: string;
    idade: number;
    endereco: string;
}

type Empresa = {
    nome: string;
    cnpj: number;
}

type EnderecoPessoa = {
    enderecoSecundario: string;
    cidade: string;
    pais: string;
}

type EnderecoEmpresa = {
    localizacao: 'rua' | 'avenida' | 'praça';
}

type EnderecoFinal<T> = T extends { endereco: string } ? EnderecoPessoa : EnderecoEmpresa;

const enderecoPessoa: EnderecoFinal<Pessoa> = {
    enderecoSecundario: 'Rua 2',
    cidade: 'São Paulo',
    pais: 'Brasil',
}

const enderecoEmpresa: EnderecoFinal<Empresa> = {
    localizacao: 'rua'
}

console.log(enderecoPessoa);
console.log(enderecoEmpresa);