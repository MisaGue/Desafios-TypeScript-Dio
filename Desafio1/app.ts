interface Funcionario {
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'João';

const funcionarioObj1: Funcionario = {
    codigo: 15,
    nome: 'Maria'
}