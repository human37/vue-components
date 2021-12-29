import Vue from "vue";

import Banner from "./Banner.vue";
import ProgressBar from "./ProgressBar.vue";

const Components = {
  Banner,
  ProgressBar,
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
