const prompt = require("prompt-sync")()

function converterEmHoras(num){
    console.log("Número em minutos: ", num)
    console.log("Número em horas: ", num / 60)
}

let num = Number(prompt("Digite um número em minutos: "))

converterEmHoras(num)