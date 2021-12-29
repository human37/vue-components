<template>
  <label title="progress bar">
    <div
      class="progress-bar"
      :style="progressBarStyles"
      :class="`progress-bar-size-${size}`"
      :aria-valuemin="0"
      :aria-valuemax="100"
      :aria-valuenow="value"
      aria-roledescription="progress bar"
    >
      <div class="progress-bar-value" :style="progressBarValueStyles"></div>
    </div>
  </label>
</template>

<script>
/**
 * Accessible progress bar for showing loading progress.
 * @example
 * <ProgressBar size="large" :value="value" />
 */
export default {
  props: {
    /**
     * The size for the progress bar.
     * @values small, medium, large
     */
    size: {
      type: String,
      default: "medium",
      validator(size) {
        return ["small", "medium", "large"].indexOf(size) > -1;
      },
    },
    /**
     * The styles for the progress bar.
     * @values Object
     */
    styles: {
      type: Object,
      default: () => ({}),
    },
    /**
     * The value for the progress bar (out of 100).
     * @values Number
     */
    value: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      progressBarStyles: {
        ...this.styles,
      },
    };
  },
  computed: {
    width() {
      return "width: " + (100 - this.value > 0 ? this.value : 100) + "%";
    },
    borderRadius() {
      return this.value === 100
        ? "border-radius: 4px"
        : "border-radius: 4px 0px 0px 4px";
    },
    progressBarValueStyles() {
      return this.width + ";" + this.borderRadius;
    },
  },
};
</script>

<style lang="scss" scoped>
.progress-bar {
  width: 370px;
  background: rgba(128, 128, 128, 0.15);
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  border-radius: 8px;
  display: flex;
  align-items: center;
}
.progress-bar-value {
  position: relative;
  height: inherit;
  background-color: #4747eb;
}
.progress-bar-size-large {
  height: 24px;
  .progress-bar-value {
    height: 16px;
    margin-left: 4px;
    margin-right: 4px;
  }
}
.progress-bar-size-medium {
  height: 12px;
}
.progress-bar-size-small {
  height: 8px;
}
</style>
