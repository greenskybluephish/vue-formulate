import { createApp } from 'vue'
import VueFormulate from '../src/Formulate'
import FormulateSpecimens from './FormulateSpecimens.vue'

// Vue.config.productionTip = false

const app = createApp(FormulateSpecimens)
app.use(VueFormulate)

app.mount('#app')
