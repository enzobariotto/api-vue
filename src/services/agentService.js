const BASE_URL = 'https://valorant-api.com';

export async function fetchAgents(){
    const response = await fetch(`${BASE_URL}/v1/agents`)

    if(!response.ok){
        throw new Error(`Erro ${response.status}`)
    }

    return response.json();
}