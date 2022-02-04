<template>
  <label title="tabs menu">
    <a
      v-for="(item, index) in items"
      role="tab"
      class="tabs-menu-item"
      :class="{ selected: item === selectedItem }"
      :style="tabMenuStyles"
      :key="item"
      :tabindex="startIndex ? index + startIndex : index"
      :aria-selected="item === selectedItem"
      :aria-controls="'tab-' + index"
      @click="selectedItem = item"
      @keydown.enter="selectedItem = item"
    >
      {{ item }}
    </a>
  </label>
</template>

<script>
/**
 * Tabs menu for picking from a list of tabs.
 * @example
 *
 * <Tabs :items="['Mars', 'Jupiter', 'Saturn', 'Venus']" @itemSelected="handleItemSelect" />
 */
export default {
  props: {
    /**
     * The array of tabs to pick from.
     * @values Array of tabs
     */
    items: {
      type: Array,
      default: () => [],
    },
    /**
     * The styles for the tabs menu.
     * @values Object
     */
    styles: {
      type: Object,
      default: () => ({}),
    },
    /**
     * The starting tab index for the tabs menu.
     * @values Number
     */
    startIndex: {
      type: Number,
      default: () => null,
    },
  },
  data() {
    return {
      selectedItem: null,
    };
  },
  computed: {
    tabMenuStyles() {
      return {
        ...this.styles,
      };
    },
  },
  watch: {
    selectedItem() {
      this.$emit("itemSelected", this.selectedItem);
    },
  },
};
</script>

<style scoped>
.tabs-menu-item {
  display: inline-block;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 11px;
  cursor: pointer;
  background-color: #fafafa;
  border-bottom: 1px solid lightgray;
  color: #4f637d;
  font-size: 1.2em;
  font-weight: bold;
}
.selected {
  background-color: #fafafad2;
  color: #313e4f;
  border-bottom: 2px solid #2a7bd6;
  padding-bottom: 10px;
}
</style>
