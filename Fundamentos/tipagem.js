/**
 * Tipagem Dinâmica - JS
 */

// declaração de variáveis
let nome,idade,peso,altura,vip,imc

//entrada de dados

nome = "edinaldo pereira"
idade = 67
peso =  63
altura = 1.76
vip = true

//a linha abaixo verifica o tipo da variável
console.log(typeof(nome))

console.clear()

//processamento
//imc (índece de massa  corporal)|fmc (Frequencia cardiáca máxima)
imc = peso / (altura*altura)
fmc = 208 - (0.7*idade)

//saída
console.log("ficha do aluno")
console.log('___________________________________________________________________')
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`VIP: ${vip}`)
console.log(`IMC: ${imc.toFixed(2)}`)
console.log(`FMC: ${fmc} bpm`)