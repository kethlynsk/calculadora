const prompt = require("prompt-sync")({});

let num1 = 0
let num2 = 0

console.log("**CALCULADORA**\nEscolha o número para a operação:\n1. ADIÇÃO\n2. SUBTRAÇÃO\n3. MULTIPLICAÇÃO\n4. DIVISÃO\n5. PORCENTAGEM")
let operacao = +prompt()

if(operacao != 1 && operacao != 2 && operacao != 3 && operacao != 4 && operacao != 5 || operacao == isNaN){
    operacao = +prompt("Não entendi. Aperte ENTER e comece de novo.")
    process.exit()
}else{
    num1 = +prompt("Digite o primeiro número: ")
    num2 = +prompt("Digite o segundo número: ")
}
let mAdicao = require("./1adicao");
let mSubtracao = require("./2subtracao")
let mMultiplicacao = require("./3multiplicacao")