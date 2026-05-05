// Composable: encapsula o estado e a lógica de buscar agentes, pode ser reutilizado em qualquer componente
import { ref, onMounted } from 'vue';
import { fetchAgents } from '@/services/agentService';

export function useAgents(){
    const agents = ref([]); // ref() torna a variável reativa: quando muda, a tela atualiza
    const loading = ref(true);
    const error = ref(null);

    onMounted(async () => { // onMounted: executa quando o componente aparece na tela
        try {
            const response = await fetchAgents();
            agents.value = response.data; // .value é como se acessa/modifica um ref no script
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false; // finally sempre executa, com erro ou sem
        }
    });

    return { agents, loading, error }; // retorna para o componente usar
}
