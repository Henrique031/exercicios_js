/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. 
A função deverá imprimir o resultado e o resto da divisão destes dois valores. */

const dividendoDivisor = (value1, value2) =>{
    let result = value1 / value2
    let restoResult = value1 % value2

    return {
        result: result,
        restoResult: restoResult
    }
}

console.log(dividendoDivisor(4, 3)) // output: { result: 2, restoResult: 0 }