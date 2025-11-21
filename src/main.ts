import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import AppContainer from '@/components/layout/AppContainer.vue'

import {
  faPalette,
  faMoon,
  faSun,
  faXmark,
  faBarsStaggered,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

import { faSquareLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

library.add(
  faPalette,
  faMoon,
  faSun,
  faXmark,
  faBarsStaggered,
  faArrowUpRightFromSquare,
  faSquareLinkedin,
  faSquareGithub
)

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon)
app.component('AppContainer', AppContainer)
app.mount('#app')
