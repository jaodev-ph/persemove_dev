import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';
import router from './router';
import store from './store';
import 'buefy/dist/buefy.css';
import scss from './assets/css/main.scss';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Install BootstrapVue
Vue.use(Buefy);
Vue.use(scss);
Vue.config.productionTip = false;
// Vue.use(BootstrapVue);
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
