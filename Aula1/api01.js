//Carregar a biblioteca do axios e criar um objeto dela
const axios = require("axios")

//Criar uma função
//Como vamos aguardar a resposta usamos async
async function buscarUsuarios() {
    //URL do site (backend) a ser pesquisado
    const url = 
    "https://jsonplaceholder.typicode.com/users"    


    try{
        const resposta = await axios.get(url);

        
    }

}
