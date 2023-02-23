const prompt = require("prompt-sync")()

let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número: "))

let res = num1 * num2

console.log("O resultado da multiplicação é: ", res)