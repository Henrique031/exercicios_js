/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

const simpleInterest = (initialCapital, taxa, time) => initialCapital + (initialCapital * taxa * time)
    
const compoundInterest = (initialCapital, taxa, time) => initialCapital * (1 + taxa) ** time
    

console.log(simpleInterest(100, 10/100, 2));// output: 120
console.log(compoundInterest(100, 10/100, 2));// output: 121.00000000000001