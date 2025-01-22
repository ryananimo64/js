/**
 * Estudo das funções
 */

//Função simples 
function hello(){
    console.log("Helloo function")
}

hello()

console.log(typeof(hello))
hello()

//Função atribuída
const hello2 = function() {
    console.log("Hello function assigned")
}

console.log(typeof(hello2))
hello2()

//arrow function (simplificação da função atribuída)
//function ---- =>
const hello3 = () => {
    console.log("Hello arrow function")
}

console.log(typeof(hello3))
hello3()

//Funções com passagem de parâmetros e retorno
// função literal
function somarS(num1, num2) {
    return (console.log(num1+num2))
}

somarS(9, 1)

// Função atribuída
const somarA = function(num1, num2){
    return (console.log(num1 + num2))
}

somarA(6, 3)

// Arrow Function
const somarAF = (num1, num2) => {
    return (console.log(num1 + num2))
}

somarAF(60, 9)

//Arrow Function simplificada (retorno é implicito)
const somarSAS = (num1,num2) => console.log(num1+num2)


somarSAS(1, 5)