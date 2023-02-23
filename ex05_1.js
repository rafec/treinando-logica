const prompt = require("prompt-sync")()

function podeDirigir(idade){
    if (idade >= 18){
        return "Você pode dirigir"
    } else {
        return "Você não pode dirigir"
    }
}

idade = Number(prompt("Digite sua idade: "))
console.log(podeDirigir(idade))