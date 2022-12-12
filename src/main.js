import { createApp } from 'vue'
import App from '~/App'
import store from '~/store'
import router from '~/routes'
import { LoadingSpinner, BackHome } from '~/components/shared'

const app = createApp(App)
app.use(store)
app.use(router)
app.component('LoadingSpinner', LoadingSpinner)
app.component('BackHome', BackHome)
app.mount('#app')