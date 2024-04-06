import {createApp} from 'vue'
import './style.css'
import '../node_modules/flowbite-vue/dist/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import App from './App.vue'
import router from "./router/index.js";
import store from "./store/index.js";
import {createBootstrap} from 'bootstrap-vue-next'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(createBootstrap({components: true, directives: true}))
app.mount('#app')