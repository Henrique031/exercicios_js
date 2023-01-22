/* 12) Faça um algoritmo que calcule o fatorial de um número. */

function fatorial(n) {
    if(n === 1 || n === 0) return 1
   let valor = n
   let i = n - 1
   while(i >= 1){
    valor *=  i
    i--
   }
   return valor

}
console.log(fatorial(4))// output: 24
console.log(fatorial(6))// output: 720
console.log(fatorial(7))// output: 5040
console.log(fatorial(8))// output: 40320