import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('formatSign', function(x, sign){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sign) + " vnđ";
});
Vue.filter('formatSignUsb', function(x, sign){
  return x.toString().replace(/\B(?=(\d{2})+(?!\d))/g, sign) + " USD";
});

new Vue({
  render: h => h(App),
}).$mount('#app')
