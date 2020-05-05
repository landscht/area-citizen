import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Accueil from "./components/Accueil";
import './plugins/vue-router';
import Comparateur from "./components/Comparateur";
import Ships from "./components/Ships";
import Verse from "./components/Verse";
import ShipInfo from "./components/ShipInfo";

Vue.config.productionTip = false

const router = new VueRouter({
  routes : [
    {path: '/', redirect: '/accueil'},
    {path: '/accueil', component: Accueil},
    {path: '/comparator', component: Comparateur},
    {path: '/ships', component: Ships},
    {path: '/verse', component: Verse},
    {path: '/ship/:name', component: ShipInfo}
  ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
