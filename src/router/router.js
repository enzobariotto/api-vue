// Router: define quais componentes renderizar para cada URL
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter ({
    history: createWebHistory(), // usa URLs limpas sem o # (ex: /agent/xyz)
    routes:[
        {
        path: '/',
        name: 'agent-list',
        component:()=>import('../views/AgentListView.vue') // lazy load: só carrega quando acessar a rota
        },
        {
        path: '/agent/:uuid', // :uuid é um parâmetro dinâmico lido via route.params.uuid
        name: 'agent-detail',
        component:()=>import('../views/AgentDetail.vue')
        }
    ]
})
  
  export default router