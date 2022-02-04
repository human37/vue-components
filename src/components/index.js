import Vue from "vue";

import Banner from "./Banner.vue";
import ProgressBar from "./ProgressBar.vue";
import Select from "./Select.vue";
import IconInput from "./IconInput.vue";
import Tabs from "./Tabs.vue";

const Components = {
  Banner,
  ProgressBar,
  Select,
  IconInput,
  Tabs,
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
