<template>
  <div class="banner" :style="bannerStyles" :class="`banner__${position}`">
    {{ message }}
  </div>
</template>

<script>
const defaultStyles = {
  left: 0,
  right: 0,
};
/**
 * Banner for the top or bottom of the page.
 * @example
 * <Banner message="banner component" :styles="{ 'text-align': 'center' }" position="top" />
 */
export default {
  props: {
    /**
     * The position for the banner.
     * @values top, bottom
     */
    position: {
      type: String,
      default: "top",
      validator(position) {
        return ["top", "bottom"].indexOf(position) > -1;
      },
    },
    /**
     * The styles for the banner.
     * @values Object
     */
    styles: {
      type: Object,
      default: () => ({}),
    },
    /**
     * The message for the banner.
     * @values String
     */
    message: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      bannerStyles: {
        ...defaultStyles,
        ...this.styles,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.banner {
  padding: 12px;
  background-color: #7c7c7c;
  text-align: left;
  position: fixed;
  z-index: 2;
}
.banner__top {
  top: 0;
}
.banner__bottom {
  bottom: 0;
}
</style>
