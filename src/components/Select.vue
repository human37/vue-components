<template>
  <label title="select menu">
    <select
      :style="selectMenuStyles"
      v-model="selectedItem"
      @change="$emit('itemSelected', selectedItem)"
      aria-roledescription="select dropdown"
    >
      <option
        v-for="item in items"
        :value="item"
        :key="item"
        :aria-valuetext="item"
      >
        {{ item }}
      </option>
    </select>
  </label>
</template>

<script>
/**
 * Select menu for picking from a list of items.
 * @example
 *
 * <Select :items="['Luke Skywalker', 'Princess Lea', 'Yoda', 'Darth Vader']" @itemSelected="handleItemSelect" />
 */
export default {
  props: {
    /**
     * The array of items to pick from.
     * @values Array of items
     */
    items: {
      type: Array,
      default: () => [],
    },
    /**
     * The styles for the select menu.
     * @values Object
     */
    styles: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      selectedItem: null,
      width: 0,
    };
  },
  computed: {
    selectMenuStyles() {
      return {
        ...this.styles,
        width: this.width + "px",
      };
    },
  },
  watch: {
    selectedItem() {
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      ctx.font = "16px Roboto";
      this.width = ctx.measureText(this.selectedItem).width + 60;
    },
  },
};
</script>

<style lang="scss" scoped>
select {
  height: 43px;
  background: #80808026;
  border-radius: 8px;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #656565;
  padding-left: 16px;
  padding-right: 16px;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg width='14' height='8' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M1 1L7 7L13 1' stroke='%23656565' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>");
  background-repeat: no-repeat, repeat;
  background-position: right 16px top 50%, 0 0;
  background-size: 12px auto, 100%;
  min-width: 100px;
}
select:hover {
  color: black;
  background-image: url("data:image/svg+xml;utf8,<svg width='14' height='8' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M1 1L7 7L13 1' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>");
}
</style>
