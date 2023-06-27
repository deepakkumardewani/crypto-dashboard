import Vue from 'vue'
import VueRouter from 'vue-router'
import Cryptocurrencies from '../views/Cryptocurrencies.vue'
import Dashboard from '../views/Dashboard.vue'
import Exchange from '../views/Exchange.vue'
import News from '../views/News.vue'
// import { publicPath } from "../../vue.config";

Vue.use(VueRouter)

export default new VueRouter({
  base: '',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/cryptocurrencies',
      name: 'cryptocurrencies',
      component: Cryptocurrencies
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: Exchange
    }
  ]
})
