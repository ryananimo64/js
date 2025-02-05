/**
 * 
 * @author Ryan Rodrigues
 */

console.clear()
let alunos = []
console.log(typeof(alunos))
console.clear()
//                 [0]       [1]      [2]     [3]
let alunosem1 = ["Vitor","Claudio","Pedro","Mario"]
console.log(typeof(alunos))
// .length (obtem o tamanho do array)
console.log(alunosem1.length)
// Exibindo os dados de um array
console.log(alunosem1)
// Exibindo um aluno no array
console.log(alunosem1[3])
// Exibindo os dados do array em uma tabela
//console.table(alunosem1)
// adicionando um elemento ao array
alunosem1.push("Luiza")
console.table(alunosem1)
//modificar um elemento do array
alunosem1[0] = "Victor"
console.table(alunosem1)
//excluir um elemento do array
delete alunosem1[2]
console.table(alunosem1)
//uso do laço for para pecorrer um array
let notas = [3,4,6,1,8,2,9]
for (let i = 0; i< notas.length;i++){
    console.log(notas[i])
}

// forEach (simplificação do laço for para uso em array)
notas.forEach((n) => {
    console.log(n)
})

// map (mapeamento da estrutura de dados para calculos ou conversões)
// exemplo 1: adicionar 1 ponto as notas
let notaAtualizada = notas.map((na) => {
    return na + 1
})
console.log(notas)
console.log(notaAtualizada)

// Exemplo 2 : Conversão de um sistema de notas 
/*
 Na - não atendeu(nota < 5 )
 Pa - Parcialmente atendido(nota >5 && nota <7)
 A - atendido (nota > 7)

*/
let notaConvertida = notas.map((nt) => {
    if ( nt < 5){
        return "NA"
    }else if (nt > 7){
        return "A"
    }else {
        return "PA"
    }
})

console.log(notas)
console.log(notaConvertida)
