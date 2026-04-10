 //Importar o pacote do Express
 const express = require("express");
 //Importar o pacote do CORS
 const cors = require("cors");
 //Criar um objeto (app) através da classe express
 const app = express();
 //Adicionar o recurso do CORS no backend (app)
 app.use(cors());

 //Declarar uma constante para o número da porta
 const PORTA = 3000;
 
 //Criar um método usando GET que recebe três parâmetros
 //Para identificar um parâmetro usamos : seguido do nome
 app.get('/calcular/:n1/:n2/:operacao', (req, res) => {
   //Criar duas constantes para receber os valores n1 e n2
   //Os parâmetros estão como String, vamos converter para Number
   const n1 = Number(req.params.n1);
   const n2 = Number(req.params.n2);
   //Criar uma constante para receber o valor da operação
   const operacao = req.params.operacao;

   switch(operacao){
    case "soma":
        //Enviar uma resposta (res) com o código HTTP 200 (Sucesso)
        //Converter a resposta para JSON (atributo : valor)
        res.status(200).json({resultado: n1+n2});
    break;
    case "subtracao":
        res.status(200).json({resultado: n1-n2});
    break;
    case "multiplicacao":
        res.status(200).json({resultado: n1*n2});
    break;
    case "divisao":
        res.status(200).json({resultado: n1/n2});
    break;
   }
 })


 //Iniciar o servidor com o método listen
 app.listen(PORTA, () =>{
    //Exibir mensagem para conferir se deu tudo certo
    console.log("Servidor iniciado com sucesso");
 })
