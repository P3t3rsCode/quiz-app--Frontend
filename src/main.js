import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import TestSection from "./components/TestSection";
import Result from "./components/Result";
import HomeBody from "./components/HomeBody";


Vue.config.productionTip = false;
Vue.use(Router);

const routes = [
 
  {
    path:"/",
    name:"Home",
    component:HomeBody
  },
  {
    path: "/test",
    name: "TestSection",
    component: TestSection
  },
  {
    path:"/result",
    name:"Result",
    component:Result,
    props: true
  }
];


const router= new Router({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
