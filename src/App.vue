<template>
  <body>
    <h1>{{ title }}</h1>
    <Banner
      message="banner component"
      :styles="{ 'text-align': 'center' }"
      position="bottom"
    />
  </body>
</template>

<script>
import Banner from "./components/Banner.vue";
export default {
  name: "App",
  data: () => ({
    title: "@human37/vue-components",
  }),
  components: {
    Banner,
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
