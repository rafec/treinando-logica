const prompt = require("prompt-sync")()

function tabuada(num){
    for (let i = 0; i < 10; i++){
        console.log(num*(i+1))
    }
}

let num = Number(prompt("Digite um número inteiro: "))

tabuada(num)