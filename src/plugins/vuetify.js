import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/scss/materialdesignicons.scss';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import api from '../api/api';
import carousel3d from 'vue-carousel-3d';


Vue.use(Vuetify);
Vue.use(carousel3d); 
Vue.prototype.$http = api;

export default new Vuetify({
    icons:{
        iconfont: 'mdi' || 'md' || 'fa'
    },
});
