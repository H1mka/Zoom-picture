import Vue from 'vue';
import App from './App.vue';
import ZoomImage from './components/ZoomImage.vue';

Vue.config.productionTip = false;

Vue.use(ZoomImage);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
