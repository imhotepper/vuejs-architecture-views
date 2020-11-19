import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { makeServer } from "./mock-server"

Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios'

if (process.env.NODE_ENV === "development") {
    makeServer();
}

Vue.use(VueAxios, axios)


//interceptor
axios.interceptors.request.use(function(config) {
    console.log('[views] Axios request interceptor executed at: ', new Date());
    return config;
}, function(err) {
    return Promise.reject(err);
});


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')