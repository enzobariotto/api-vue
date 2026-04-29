import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter ({
    history: createWebHistory(),
    routes:[
        {
        path: '/', 
        name: 'agent-list',
        component:()=>import('../views/AgentListView.vue')
        },
        {
        path: '/agent/:uuid', 
        name: 'agent-detail',
        component:()=>import('../views/AgentDetail.vue')
        }
    ]
})
  
  export default router