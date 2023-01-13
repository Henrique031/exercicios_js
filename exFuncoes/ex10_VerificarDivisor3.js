/* 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */

function somarAlgarismos (n) {
    let separar = Number(n).toString().split('')//convertendo para string e separando cada numero
    // console.log(`Némeros separados: ${separar}`)
    let qtde = Number(n).toString().length //Quantidade de núemros
    // console.log(`Quantidade: ${qtde}`)
    let valoresInput = []

    for(let i = 0; i < qtde; i++){
        valoresInput.push(Number(separar[i])) //converter para numero
    }
    // console.log(`Números convertido para number: ${valoresInput}`)

    if (qtde === 1)
        return n
    

        let soma = valoresInput[0]
        for (let i = 1; i <= qtde; i++) {
            soma += valoresInput[i]
            if (qtde === i+1) {
                return soma
            }
        }
}
// console.log(somarAlgarismos())

function criarAlgarismos() {
    let list = []
    let i = 0
    let d = 3
        while (d <= 200) {
            list[i] = d
            i++
            d+=3
        }

    return list
}
// console.log(criarAlgarismos())

function verificarDivisorPor3(value) {
    let lista = criarAlgarismos()
    let algarismosSomados = somarAlgarismos(value)

    for(let i = 0; i < lista.length; i++) {
        if (algarismosSomados === lista[i]) {
            return true
        } 
    }
    return false

}
console.log(verificarDivisorPor3(25454)) // false
console.log(verificarDivisorPor3(54134)) // false
console.log(verificarDivisorPor3(324)) // true
console.log(verificarDivisorPor3(222)) // true
console.log(verificarDivisorPor3(43425435345)) // true
