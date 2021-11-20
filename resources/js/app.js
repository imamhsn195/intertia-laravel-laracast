import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia'

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})
