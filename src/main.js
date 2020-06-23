import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import anime from "animejs";
Vue.prototype.$anime = anime;

Vue.config.productionTip = false;

new Vue({
    store,
    render: (h) => h(App),
}).$mount("#app");
