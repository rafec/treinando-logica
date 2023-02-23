const prompt = require("prompt-sync")()

function tabuada(num){
    for (let i = 1; i < 10; i++){
        // console.log(i, " X ", num, " = ", num*i)
        console.log(`${i} X ${num} = ${i*num}`)
    }
}

let num = Number(prompt("Digite um número inteiro: "))

tabuada(num)