import './bootstrap';
import { createApp } from 'vue/dist/vue.esm-bundler.js'
import "bootstrap/dist/css/bootstrap.css";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import AppComponent from './App.vue';
import router from './router/index'

const app = createApp({
    components: {
        AppComponent
    }
});

app.use(router);
app.use(VueSweetalert2);
app.mount('#app');

import "bootstrap/dist/js/bootstrap.js";
