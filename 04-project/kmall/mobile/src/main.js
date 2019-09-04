import Vue from 'vue'
import App from './App.vue'
//引入公共css

import './assets/css/common.css'

//全局加载vant组件
import './plugins/vant'

//引入store
import store from './store'
//引入路由对象
import router from './router'

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')