/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo) */

const triangle = (side1, side2, side3) => {
    let equilateral = 'Equilateral' // Todos iguais
    let isosceles = 'Isosceles' // 2 lados iguais
    let esquiline = 'Esquiline' // Todos lados diferentes
    if (side1 === side2 && side1 === side3 && side2 === side3) {
        console.log(`Classification: ${equilateral}`)        
    } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
        console.log(`Classification: ${esquiline}`)                
    } else {
        console.log(`Classification: ${isosceles}`)        
    }
    
}

triangle(3, 3, 3) // output: Classification: Equilateral
triangle(1, 2, 2) // output: Classification: Isosceles
triangle(1, 2, 3) // output: Classification: Esquiline