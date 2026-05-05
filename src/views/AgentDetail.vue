<script setup>
//componente de detalhes do agente, exibe informações detalhadas sobre um agente específico, como nome, descrição e imagem
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchAgent } from '@/services/agentService'

const route = useRoute()   // lê informações da URL atual (ex: route.params.uuid)
const router = useRouter() // usado para navegar entre rotas (ex: router.back())
const agent = ref(null)
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await fetchAgent(route.params.uuid) // lê o :uuid que está na URL
    agent.value = response.data
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <p v-if="loading" class="status-message">Carregando...</p>
  <p v-else-if="error" class="status-message error">{{ error }}</p>

  <div v-else class="detail">
    <button class="back-btn" @click="router.back()">← Voltar</button>
    <h1 class="agent-name">{{ agent.displayName }}</h1>
    <img :src="agent.displayIcon" :alt="agent.displayName" class="agent-img" />
    <p class="agent-desc">{{ agent.description }}</p>
  </div>
</template>

<style scoped>
.detail {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.back-btn {
  background: none;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.4rem 0.9rem;
  cursor: pointer;
  border-radius: 2px;
  align-self: flex-start;
  transition: color 0.2s, border-color 0.2s;
}

.back-btn:hover {
  color: var(--accent);
  border-color: var(--accent);
}

.agent-name {
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-primary);
  border-left: 4px solid var(--accent);
  padding-left: 0.8rem;
}

.agent-img {
  width: 150px;
}

.agent-desc {
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 1rem;
  font-family: 'Segoe UI', sans-serif;
}
</style>
