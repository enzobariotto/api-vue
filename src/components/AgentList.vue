<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToAgent(uuid) {
  router.push({ name: 'agent-detail', params: { uuid } })

}

const props = defineProps({
  agents: {
    type: Array,
    required: true
  }})
</script>

<template>
  <div class="agent-list">
    <button
      v-for="agent in agents" :key="agent.uuid"
    @click="goToAgent(agent.uuid)"
      class="agent-button">
      {{ agent.displayName }}
    </button>
  </div>
</template>

<style scoped>
</style>