<template>
  <body>
    <h1>{{ title }}</h1>
    <Banner
      message="banner component"
      :styles="{ 'text-align': 'center' }"
      position="bottom"
    />
    <div
      style="
        border: 1px solid gray;
        padding: 20px;
        width: 370px;
        border-radius: 8px;
      "
    >
      <div style="margin-bottom: 10px">
        progress bar component: {{ value }}%
      </div>
      <ProgressBar size="large" :value="value" />
    </div>
  </body>
</template>

<script>
import Banner from "./components/Banner.vue";
import ProgressBar from "./components/ProgressBar.vue";

export default {
  name: "vue-components",
  data: () => ({
    title: "@human37/vue-components",
    value: 0,
  }),
  components: {
    Banner,
    ProgressBar,
  },
  methods: {
    fakeProgress() {
      this.value = this.value + 1;
      if (this.value > 100) {
        this.value = 0;
      }
    },
  },
  created() {
    setInterval(this.fakeProgress, 50);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(53, 53, 53);
  margin-top: 60px;
}
</style>
