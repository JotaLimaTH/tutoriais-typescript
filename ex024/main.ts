interface DadosBancarios {
    conta: number;
    agencia: number;
    banco: string;
}

interface Cliente {
    nome: string;
    email: string;
}

interface DadosPessoaFisica {
    cpf: number;
}

type DadosCliente = DadosBancarios & Cliente & DadosPessoaFisica

const dadosCliente: DadosCliente = {
    conta: 123456,
    agencia: 4532,
    banco: 'Itaú',
    nome: 'Mario de Andrade',
    email: 'mario-andrade@yahoo.com',
    cpf: 12345678987,
}