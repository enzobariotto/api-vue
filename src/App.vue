<!--
<script setup>
import { ref } from "vue";
import { useAgents } from "./composables/useAgent";
import AgentList from "./components/AgentList.vue";

const { agents, loading, error } = useAgents();
const selectedAgent = ref(null);

function toggleAgent(agent) {
  if (selectedAgent.value?.uuid === agent.uuid) {
    selectedAgent.value = null;
  } else {
    selectedAgent.value = agent;
  }
}
</script>

<template>
  <h1>Agentes do Valorant</h1>
  <p v-if="loading">Carregando...</p>
  <p v-else-if="error">{{ error }}</p>
  <AgentList v-else :agents="agents" @select="toggleAgent" />
  <div v-if="selectedAgent">
    <h2>{{ selectedAgent.displayName }}</h2>
    <img :src="selectedAgent.displayIcon" width="150" />
    <p>{{ selectedAgent.description }}</p>
  </div>
</template>
-->

<template>
  <div class="app-wrapper">
    <header class="app-header">
      <RouterLink to="/" class="app-logo">
        <span class="logo-accent">V</span>ALORANT
        <span class="logo-sub">AGENTS</span>
      </RouterLink>
    </header>
    <main class="app-main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  background: rgba(15, 25, 35, 0.95);
  border-bottom: 1px solid var(--border);
  padding: 0 2rem;
  height: 60px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
}

.app-logo {
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  letter-spacing: 0.18em;
  color: var(--text-primary);
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  text-decoration: none;
  transition: opacity 0.2s;
}

.app-logo:hover {
  opacity: 0.8;
}

.logo-accent {
  color: var(--accent);
  font-size: 1.6rem;
  line-height: 1;
}

.logo-sub {
  color: var(--text-muted);
  font-size: 0.9rem;
  letter-spacing: 0.25em;
}

.app-main {
  flex: 1;
  padding: 2rem;
}
</style>