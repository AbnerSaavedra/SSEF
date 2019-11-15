require('./bootstrap');
window.Vue = require('vue');

// Imports
import vuetify from './vuetify'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

// Components
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('Profile', require('./components/Profile.vue').default);
Vue.component('Home', require('./components/Home.vue').default);
Vue.component('FooterApp', require('./components/FooterApp.vue').default);


const app = new Vue({
  
  vuetify,
    el: '#app',
    theme: {
      options: {
        customProperties: true
      },
      themes: {
        light: {
          primary: '#ee44aa',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107'
        }
      }
    },
    icons: {
      iconfont: 'mdi'
    }
});
