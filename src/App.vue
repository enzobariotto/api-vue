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
  <RouterView />
</template>