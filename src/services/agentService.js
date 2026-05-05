//comunicação com a API, endereço base
const BASE_URL = 'https://valorant-api.com'; 

export async function fetchAgents(){
    const response = await fetch(`${BASE_URL}/v1/agents`)

    if(!response.ok){
        throw new Error(`Erro ${response.status}`)
    }

    return response.json();
}

export async function fetchAgent(uuid) {
    const response = await fetch(`${BASE_URL}/v1/agents/${uuid}`)

    if (!response.ok) {
        throw new Error(`Erro ${response.status}`)
    }

    return response.json()
}

