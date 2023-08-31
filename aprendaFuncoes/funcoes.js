/* 
Função é um trecho de código que só é executado quando chamado/invicado

Função void (vazia)
Função com Parâmetro(s)
Função com Return
Função Arrow / Arrow Function
*/

// Função void (vazia)
let valor = 20
function incrementa() {
    console.log('Estou dentro da função')
    valor += 30
    valores = valor + 10
}
incrementa()
console.log(valor)
console.log(valores)

//***************************************************************  */

// Com Parâmetros
function mostraNome(nome) {
    console.log(nome)
}

function soma(num1, num2) {
    console.log(num1 + num2)
}
mostraNome('Sandro Marques')
mostraNome('Alex Sandro')
mostraNome('Sandra Marques')

soma(25, 25)

//***************************************************************  */

// Com Return
function soma(num1, num2) {
    let resultado = num1 + num2
    return resultado
}
let meusNumeros = soma(4, 6)
let meusNumeros2 = soma(40, 54)

console.log(meusNumeros)
console.log(meusNumeros2)

//***************************************************************  */

// Função Arrow / Arrow Function
const mult = (namber1, namber2) => {
    const multiplicacao = namber1 * namber2
    return multiplicacao // ou console.log
}

const resMult = mult(5, 5)
console.log(resMult)

// XXXXXXXXXX Arrow ABREVIADA
const sub = (namber1, namber2) => namber1 - namber2

const resSub = sub(30, 15)
console.log(resSub)
