/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import router from './router'
import store from './store'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
.use(store)
.use(router);

registerPlugins(app)

app.mount('#app')
