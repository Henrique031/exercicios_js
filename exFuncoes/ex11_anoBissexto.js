/* 11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false. */


function anoBissexto(value) {
    if (value === 0) return false
    if (value % 4 === 0 && value % 100 !== 0) return true
    if (value % 4 !== 0 && value % 400 !== 0) return false
    if (value % 4 === 0 && value % 100 === 0 && value % 400 === 0) return true 
    if (value % 4 === 0 && value % 100 === 0 && value % 400 !== 0 ) return false
    
}
console.log(anoBissexto(0)) //false
console.log(anoBissexto(4)) //true
console.log(anoBissexto(100)) //false
console.log(anoBissexto(400)) // true
console.log(anoBissexto(800)) //true
console.log(anoBissexto(600)) // false
console.log(anoBissexto(2016)) // true
console.log(anoBissexto(2023)) // false
