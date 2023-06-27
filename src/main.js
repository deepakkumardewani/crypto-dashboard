import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'
import './assets/main.css'

import App from './App.vue'
import Balances from './components/Balances.vue'
import LineChart from './components/LineChart.vue'
import MarketOverview from './components/MarketOverview.vue'
import RecentActivities from './components/RecentActivities.vue'
import Sidebar from './components/Sidebar.vue'
import Team from './components/Team.vue'
import router from './router'
import './style.css'
import vuetify from './vuetify'

Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

Vue.component('Sidebar', Sidebar)
Vue.component('LineChart', LineChart)
Vue.component('MarketOverview', MarketOverview)
Vue.component('RecentActivities', RecentActivities)
Vue.component('Team', Team)
Vue.component('Balances', Balances)

new Vue({
  vuetify,
  router,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')
