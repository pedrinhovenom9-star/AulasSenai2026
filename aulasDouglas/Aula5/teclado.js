const axios = require("axios");
//Biblioteca para fazer leitura via teclado
const readLine = require("readLine")
 
//Criar a interface do readLine
const entradaSaida = readLine.creteInterface({
    //Configura a entrada via teclado
    input: ProcessingInstruction.stdin,
    //Configura a saída para o monitor
    output: process.stdout
})
 
//Criar uma função para gerar números aleatórios
function aleatorios(min,max){
    //Arredondar o número mínimo para cima "ceil"
    var minimo = Math.ceil(min)
    //Arredondar o número maximo para baixo "floor"
    var maximo = Math.floor(max)
    //Retorna um valor aleatorio entre min e max
    return Math.floor(Math.random() *
(maximo - minimo)) + minimo;
 
}
 
//Varealvel para guardar pontuação
let pontuação = 0;

async function exercicio4() {
    const url = ""
}