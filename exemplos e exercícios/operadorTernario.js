// com o operador ternário é possível criar sentenças de condição de maneira mais simples,
// deixando o código mais limpo. 
// O operador ternário tem o seguinte formato: condição ? expressão se True : expressão se False

function calculaIdade(idade) {
    return idade >= 18 ? 'Maior de idade' : "Menor de idade"
}

console.log(calculaIdade(23));