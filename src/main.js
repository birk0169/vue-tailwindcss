import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const app = createApp(App);

// app.component('font-awesome-icon', FontAwesomeIcon);

// Vue.config.productionTip = false;

app.mount('#app');


// new Vue({
//     el: '#app',
//     components: { App },
//     template: '<App/>'
//   })