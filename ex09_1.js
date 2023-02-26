const prompt = require("prompt-sync")()

function converterEmHoras(num) {
    const convertido = num / 60

    if (Number.isInteger(convertido)) {
        return `Número em minutos: ${num}min\nNúmero em horas: ${convertido}h`
    }
        return `Número em minutos: ${num}min\nNúmero em horas: ${convertido.toFixed(2)}h`
}

let num = Number(prompt("Digite um número em minutos: "))

console.log(converterEmHoras(num))