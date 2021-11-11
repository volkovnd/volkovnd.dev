import Vue from "vue";

import router from "@/router";

import App from "./App.vue";

import config from "@/config";

import plugins from "@/plugins";

import { registerPlugins } from "@/utils/plugins";

Vue.config.productionTip = false;

registerPlugins(Vue, plugins, config);

new Vue({
  el: "#app",

  router,

  render: (h) => h(App),
});