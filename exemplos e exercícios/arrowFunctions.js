// As arrow functions são uma maneira mais simples de escrever funções.
// Elas geralmente são utilizadas na criação de funções anônimas ou funções de callback.
// São chamadas de arrow functions por causa de parte de sua estrutura parecer com uma seta

// Declaração de arrow function
const soma = (num1, num2) => num1 + num2

console.log(soma(5,30));

const sayHello = name => `Hello ${name}`

console.log(sayHello('Caio'));