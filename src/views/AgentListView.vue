
<script setup>
//componente de lista de agentes, exibe uma lista de todos os agentes disponíveis, cada um com seu nome e ícone, e permite clicar para ver detalhes
import { useAgents } from '@/composables/useAgent'
import AgentList from '@/components/AgentList.vue'

const { agents, loading, error } = useAgents()
</script>

<template>
  <div class="list-page">
    <h1 class="page-title">Agentes do Valorant</h1>
    <p v-if="loading" class="status-message">Carregando...</p>
    <p v-else-if="error" class="status-message error">{{ error }}</p>
    <AgentList v-else :agents="agents" />
  </div>
</template>

<style scoped>
.list-page {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-left: 4px solid var(--accent);
  padding-left: 0.8rem;
}
</style>
