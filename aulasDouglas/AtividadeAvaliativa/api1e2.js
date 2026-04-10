// Importa a biblioteca axios para realizar requisições HTTP
const axios = require('axios');

/**
 * Função para buscar dados de países da América do Sul,
 * listar informações básicas e calcular a população total.
 */
async function executar1e2() {
    try {
        // Realiza uma requisição GET para a API filtrando pela região
        const response = await axios.get('https://restcountries.com/v3.1/region/south america');
        
        // Extrai os dados da resposta da requisição
        const paises = response.data;
        
        // Variável acumuladora para somar a população de todos os países
        let populacaoTotal = 0;

        console.log("--- AMÉRICA DO SUL ---");

        // Itera sobre cada pais dentro do array
        paises.forEach(pais => {
            // Exibe o nome comum do país
            console.log(`Nome: ${pais.name.common}`);
            
            // Verifica se existe capital e exibe a primeira do array
            console.log(`Capital: ${pais.capital ? pais.capital[0] : 'N/A'}`);
            
            // Exibe a URL da imagem da bandeira em formato PNG
            console.log(`Bandeira: ${pais.flags.png}`);
            
            console.log('-------------------------');
            
            // Soma a população do país atual ao total acumulado
            populacaoTotal += pais.population;
        });

        // Exibe quantidade de países e a soma das populações formatada
        console.log(`Total de países: ${paises.length}`);
        console.log(`População Total: ${populacaoTotal.toLocaleString('pt-BR')}`);
        
        // Retorna a lista de países para que possa ser utilizada em outros codigos
        return paises; 
        
    } catch (error) {
        // Captura e exibe qualquer erro que ocorra durante a requisição ou processamento
        console.error("Erro:", error.message);
    }
}

// Chama a execução da função principal
executar1e2();