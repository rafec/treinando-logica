const prompt = require("prompt-sync")()

function multiplica(num1, num2){
    console.log("1º número: ", num1)
    console.log("2º número: ", num2)

    console.log("A multiplicação dos dois números é: ", num1 * num2)
}

let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número: "))

multiplica(num1, num2)