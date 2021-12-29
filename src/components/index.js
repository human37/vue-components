import Vue from "vue";

import Banner from "./Banner.vue";
import ProgressBar from "./ProgressBar.vue";
import Select from "./Select.vue";

const Components = {
  Banner,
  ProgressBar,
  Select,
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
