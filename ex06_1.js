const prompt = require("prompt-sync")()

function repeticao(num) {
   for (let i = 0; i <= num; i++) {
      console.log(i)
   }
}

const num = prompt("Digite um número: ")

repeticao(num)