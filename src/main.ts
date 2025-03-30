import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from '@/router'
import i18n from '@/i18n'

import { Quasar } from 'quasar'
import { QPlugins } from '@/plugins/quasar'

const app = createApp(App);

app.use(router);
app.use(i18n);

app.use(Quasar, { plugins: QPlugins });

app.mount("#app");
