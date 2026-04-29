<script setup>
    import { ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router'
    import { fetchAgent } from '@/services/agentService'

    const route = useRoute()
    const agent = ref(null)
    const loading = ref(true)
    const error = ref(null)

    onMounted(async () => {
        try {
            const response = await fetchAgent(route.params.uuid)
            agent.value = response.data
        } catch (err) {
            error.value = err.message
        } finally {
            loading.value = false
        }
    })
</script>

<template>
    <p v-if="loading">Carregando...</p>
    <p v-else-if="error">{{ error }}</p>
    <div v-else>
        <h1>{{ agent.displayName }}</h1>
        <img :src="agent.displayIcon" width="150" />
        <p>{{ agent.description }}</p>
    </div>-
</template>