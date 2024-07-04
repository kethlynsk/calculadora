const prompt = require("prompt-sync")({});

console.log("**CALCULADORA**")
let num1 = +prompt("Digite o primeiro número: ")
let num2 = +prompt("Digite o segundo número: ")

console.log("Escolha o número para a operação:\n1. ADIÇÃO\n2. SUBTRAÇÃO\n3. MULTIPLICAÇÃO\n4. DIVISÃO\n5. PORCENTAGEM")
let operacao = +prompt()

if(operacao != 1 && operacao != 2 && operacao != 3 && operacao != 4 && operacao != 5 || operacao == isNaN){
    operacao = +prompt("Não entendi. Aperte ENTER e comece de novo.")
    process.exit()
}

let mAdicao = require("./1adicao");
let mSubtracao = require("./2subtracao")
let mMultiplicacao = require("./3multiplicacao")
let mDivisao = require("./4divisao")
let mPorcentagem = require("./5porcentagem")

if(isNaN(num1) || isNaN(num2)){
    console.log("Não entendi. Digite números.")
}else{

switch (operacao) {
    case 1:
        console.log(`${num1} + ${num2} =`, mAdicao(num1, num2))
        break;
    case 2:
        console.log(`${num1} - ${num2} =`, mSubtracao(num1, num2))
        break
    case 3:
        console.log(`${num1} * ${num2} =`, mMultiplicacao(num1, num2))
        break
    case 4:
        console.log(`${num1} / ${num2} =`, mDivisao(num1, num2))
        break
    case 5:
        console.log(`${num1} % ${num2} =`, mPorcentagem(num1, num2))
        break
    default:
        break;
}}
