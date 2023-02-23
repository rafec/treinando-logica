const prompt = require("prompt-sync")()

function apenasImpares() {
    for (let i = 0; i <= num; i++) {
        if ((i % 2) != 0) {
            console.log(i)
        }
    }
}

const num = prompt("Digite um número: ")

apenasImpares(num)