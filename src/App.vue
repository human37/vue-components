<template>
  <body>
    <h1>
      <a href="https://github.com/human37/vue-components">{{ title }}</a>
    </h1>
    <div id="wrapper">
      <Banner
        message="banner component"
        :styles="{ 'text-align': 'center' }"
        position="bottom"
      />
      <div
        style="
          border: 1px solid gray;
          padding: 10px;
          margin: 20px;
          border-radius: 8px;
        "
      >
        <div style="margin: 10px">progress bar component: {{ value }}%</div>
        large:
        <ProgressBar size="large" :value="value" />
        <br />
        medium:
        <ProgressBar size="medium" :value="value" />
        <br />
        small:
        <ProgressBar size="small" :value="value" />
        <br />
      </div>
      <div
        style="
          border: 1px solid gray;
          padding: 10px;
          margin: 20px;
          width: 370px;
          border-radius: 8px;
        "
      >
        <div style="margin-bottom: 10px">
          icon input component: '{{ textInput || "nothing" }}' entered.
        </div>
        <div style="padding: 20px">
          small (right-icon):
          <IconInput
            @value="textInput = $event"
            rightIcon="account-search"
            placeholder="search for an account..."
            size="small"
          />
        </div>
        <div style="padding: 20px">
          large (left-icon):
          <IconInput
            @value="textInput = $event"
            leftIcon="account-search"
            placeholder="search for an account..."
            size="large"
          />
        </div>

        <div style="padding: 20px">
          large (both-icons):
          <IconInput
            @value="textInput = $event"
            leftIcon="account-search"
            rightIcon="database"
            placeholder="search for an account..."
            size="large"
          />
        </div>
      </div>
      <div
        style="
          border: 1px solid gray;
          padding: 10px;
          margin: 20px;
          width: 370px;
          border-radius: 8px;
        "
      >
        <div style="margin-bottom: 20px">
          select menu component: '{{ selectedItem || "null" }}' selected.
        </div>
        <Select
          :items="['Luke Skywalker', 'Princess Lea', 'Yoda', 'Darth Vader']"
          @itemSelected="handleItemSelect"
        />
      </div>
    </div>
  </body>
</template>

<script>
import Banner from "./components/Banner.vue";
import ProgressBar from "./components/ProgressBar.vue";
import Select from "./components/Select.vue";
import IconInput from "./components/IconInput.vue";

export default {
  name: "vue-components",
  data: () => ({
    title: "@human37/vue-components",
    value: 0,
    selectedItem: "",
    textInput: "",
  }),
  components: {
    Banner,
    ProgressBar,
    Select,
    IconInput,
  },
  methods: {
    fakeProgress() {
      this.value = this.value + 1;
      if (this.value > 100) {
        this.value = 0;
      }
    },
    handleItemSelect(item) {
      console.log("item selected:", item);
      this.selectedItem = item;
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
#wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 60px;
  padding-right: 60px;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
