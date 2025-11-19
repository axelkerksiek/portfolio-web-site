import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import AppContainer from '@/components/layout/AppContainer.vue'

library.add(fas, far, fab)

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon)
app.component('AppContainer', AppContainer)
app.mount('#app')
