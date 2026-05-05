<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// defineProps: declara os dados que esse componente recebe do componente pai
const props = defineProps({
  agents: {
    type: Array,
    required: true
  }
})

function goToAgent(uuid) {
  // router.push navega para outra rota sem recarregar a página
  router.push({ name: 'agent-detail', params: { uuid } })
}
</script>

<template>
  <div class="agent-list">
    <button
      v-for="agent in agents"
      :key="agent.uuid"
      class="agent-button"
      @click="goToAgent(agent.uuid)"
    >
      <img :src="agent.displayIcon" :alt="agent.displayName" class="agent-icon" />
      {{ agent.displayName }}
    </button>
  </div>
</template>

<style scoped>
.agent-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.agent-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 3px;
  color: var(--text-primary);
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.5rem 0.9rem;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
}

.agent-button:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.agent-icon {
  width: 28px;
  height: 28px;
  object-fit: contain;
}
</style>
