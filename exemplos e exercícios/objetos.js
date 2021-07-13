// Objetos em Javascript são um tipo de dado constituído por conjunto de chaves e valores.
// Cada objeto possui as propriedades determinadas pelas chaves e métodos a serem executados.

const pessoa = {
    nome: "Caio",
    idade: 32,
    cidade: "Campina Grande"
}

// Uma das formas de acessar um valor de uma chave de objeto é através da notação de ponto
console.log(pessoa.nome);

// Outra possibilidade é utilizar a notação de colchetes
console.log(pessoa['idade']);

// A outra maneira é fazer uma descontrução do objeto
const {nome, idade, cidade} = pessoa

console.log(nome);
console.log(idade);
console.log(cidade);


// Muitas vezes os dados que serão consumidos por uma aplicação estarão em um formato de array de objetos.
// Esse array de objetos é muito semelhante ao formato de arquivos chamado de JSON
// Existem alguns métodos para acessar e manipular esses arrays de objetos.
const filmes = [
    {
        id: 1,
        titulo: "Matrix",
        descricao: "Melhor filme de todos os tempos",
        duracao: "150"
    },
    {
        id: 2,
        titulo: "Matrix - Reloaded",
        descricao: "Continuação do melhor filme de todos os tempos",
        duracao: "130"
    },
    {
        id: 3,
        titulo: "Matrix - Revolutions",
        descricao: "Parte final do melhor filme de todos os tempos",
        duracao: "140"
    },
]

const [{id, titulo, descricao, duracao}] = filmes

filmes.map(filme => console.log(filme.descricao))