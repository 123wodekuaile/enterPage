import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/base.css'
import '@/assets/js/rem.js'
const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
    render:h=>h(App)
}).$mount(root)