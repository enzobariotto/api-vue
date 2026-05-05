// Camada de serviço: faz as requisições HTTP para a API do Valorant
const BASE_URL = 'https://valorant-api.com';

export async function fetchAgents(){
    const response = await fetch(`${BASE_URL}/v1/agents`)

    if(!response.ok){
        throw new Error(`Erro ${response.status}`) // lança erro se a API retornar falha
    }

    return response.json(); // converte a resposta para objeto JavaScript
}

export async function fetchAgent(uuid) {
    const response = await fetch(`${BASE_URL}/v1/agents/${uuid}`) // uuid vai direto na URL

    if (!response.ok) {
        throw new Error(`Erro ${response.status}`)
    }

    return response.json()
}

