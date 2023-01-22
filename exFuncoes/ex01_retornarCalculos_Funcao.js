/* 
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

const result = (value1 = 0, value2 = 0) => {
    let soma = value1 + value2
    let subtracao = value1 - value2
    let multiplicacao = value1 * value2
    let divisao = value1 / value2
    
    return {
        soma, 
        subtracao, 
        multiplicacao, 
        divisao,
    }
    
}

console.log(result(5, 5)) // output: { soma: 10, subtracao: 0, multiplicacao: 25, divisao: 1 }