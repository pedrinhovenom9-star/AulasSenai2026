// Importa a biblioteca axios para fazer as chamadas HTTP
const axios = require('axios');

/**
 * Função para buscar e listar todos os países 
 * que têm o português como um dos idiomas oficiais.
 */
async function executar3() {
    try {
        // Faz a requisição para o endpoint específico de idiomas (lang/portuguese)
        const response = await axios.get('https://restcountries.com/v3.1/lang/portuguese');
        
        // Armazena a lista de países retornada pela API
        const paises = response.data;

        console.log("\n--- PAÍSES QUE FALAM PORTUGUÊS ---");

        // Itera sobre o array de países lusófonos
        paises.forEach(pais => {
            // Exibe o nome comum do país
            console.log(`País: ${pais.name.common}`);
            
            // Verifica se há capital definida; caso contrário, exibe 'N/A'
            console.log(`Capital: ${pais.capital ? pais.capital[0] : 'N/A'}`);
            
            // Exibe a população formatada com separadores de milhar (padrão brasileiro)
            console.log(`População: ${pais.population.toLocaleString('pt-BR')}`);
            
            // Exibe a área territorial formatada em quilômetros quadrados
            console.log(`Área: ${pais.area.toLocaleString('pt-BR')} km²`);
            
            console.log('-------------------------');
        });
    } catch (error) {
        // Exibe uma mensagem amigável caso ocorra erro na rede ou na API
        console.error("Erro ao buscar países lusófonos:", error.message);
    }
}

// Invoca a função para executar a lógica no console
executar3();