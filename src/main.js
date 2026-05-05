import { createApp } from 'vue' //cria a aplicação
import App from './App.vue' //componente principal
import router from './router/router' //importando o sistema de rotas
import './assets/main.css' //importando o arquivo de estilos

createApp(App).use(router).mount('#app')
