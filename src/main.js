import Vue from 'vue';
import App from './App.vue';
import store from "./store";
import router from "./router";
import './registerServiceWorker';
import './../node_modules/chota/src/chota.css';


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
