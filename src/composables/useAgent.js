import { ref, onMounted } from 'vue';
import { fetchAgents } from '@/services/agentService';

export function useAgents(){
    const agents = ref([]); 
    const loading = ref(true);
    const error = ref(null);

    onMounted(async () => {
        try {
            const response = await fetchAgents();
            agents.value = response.data; 
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    });

    return { agents, loading, error }; 
}