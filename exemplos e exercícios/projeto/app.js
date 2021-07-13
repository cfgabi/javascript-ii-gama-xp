// Esse projeto tem como objetivo criar um aplicativo que faz buscas em um banco de dados de livros.

const livros = require('./database')            // importando arquivo com base de dados de livros

let flags = [], todasCategorias = [], l = livros.length, i;
for ( i = 0; i < l; i++) {
    if (flags[livros[i].categoria]) continue;
    flags[livros[i].categoria] = true;
    todasCategorias.push(livros[i].categoria)
}

// Criando a entrada do usuário
// O usuário vai buscar um livro?
const readline = require('readline-sync')       // importando biblioteca que via capturar entrada do usuário

const entradaInicial = readline.question(' Deseja buscar um livro? (S/N) ')

// Se o usuário responder sim, mostrar as categorias disponíveis e perguntar qual categoria mostrar
// Se o usuário responder não, mostrar todos os livros em ordem crescente pela quantidade de páginas
if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:');
    todasCategorias.forEach(categoria => {
        console.log(categoria);
    });

    const entradaCategoria = readline.question('Qual categoria voce escolhe? ')

    const resultadoBusca = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(resultadoBusca)
} else {
    console.log('Esses são todos os livros disponíveis (Ordenados por quantidade de páginas)');
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
    console.table(livrosOrdenados)
}