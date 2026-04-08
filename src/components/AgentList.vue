<script setup>
const props = defineProps({
  agents: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(["select"]);
</script>

<template>
  <div class="agent-list">
    <button
      v-for="agent in agents" :key="agent.uuid"
      @click="emit('select', agent)"
      class="agent-button">
      {{ agent.displayName }}
    </button>
  </div>
</template>

<style scoped>
</style>