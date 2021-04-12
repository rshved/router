import Vue from 'vue'
import router from './router'
import App from './App.vue'
import MainMenu from '@/components/MainMenu.vue'

Vue.config.productionTip = false

Vue.component('main-menu', MainMenu)

Vue.use(router)

new Vue({
  router,
  components: {
    MainMenu
  },

  render: h => h(App),
}).$mount('#app')
