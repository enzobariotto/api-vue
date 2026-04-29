<script setup>
import { useAgents } from '@/composables/useAgent'
import AgentList from '@/components/AgentList.vue'

const { agents, loading, error } = useAgents()
</script>

<template>
  <p v-if="loading">Carregando...</p>
  <p v-else-if="error">{{ error }}</p>
  <AgentList v-else :agents="agents" />
</template>
