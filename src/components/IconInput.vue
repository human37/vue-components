<template>
  <label title="text input field with icons">
    <div class="icon-input">
      <span v-if="leftIcon" class="icon left">
        <mdicon :name="leftIcon" :height="size == 'small' ? 20 : 36" />
      </span>
      <input
        :style="iconInputStyles"
        :placeholder="placeholder"
        :class="'input-' + size"
        v-model="value"
        type="text"
        aria-roledescription="text input field"
      />
      <span v-if="rightIcon" class="icon right">
        <mdicon :name="rightIcon" :height="size == 'small' ? 20 : 36" />
      </span>
    </div>
  </label>
</template>

<script>
/**
 * Text field input with icons.
 * @example
 *
 * <IconInput @input="textInput = $event.data" leftIcon="account-search" size="large" />
 */
export default {
  props: {
    /**
     * The icon on the left side.
     * @values MDI name
     */
    leftIcon: {
      type: String,
      default: () => "",
    },
    /**
     * The icon on the left side.
     * @values MDI name
     */
    rightIcon: {
      type: String,
      default: () => "",
    },
    /**
     * The width of the text field.
     * @values number in pixels
     */
    explicitWidth: {
      type: Number,
      default: () => 200,
    },
    /**
     * The size of the text field.
     * @values string 'small' or 'large'
     */
    size: {
      type: String,
      default: () => "small",
    },
    /**
     * The placeholder of the text field.
     * @values string
     */
    placeholder: {
      type: String,
      default: () => "enter text",
    },
    /**
     * The styles for the icon input text field.
     * @values Object
     */
    styles: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      value: "",
    };
  },
  computed: {
    iconInputStyles() {
      return {
        ...this.styles,
        width: this.explicitWidth + "px",
        "padding-left": this.leftIcon ? "35px" : "5px",
        "padding-right": this.rightIcon ? "35px" : "5px",
      };
    },
  },
  watch: {
    value() {
      this.$emit("value", this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  background: none;
  border: none;
  padding: 5px;
  padding-left: 35px;
  padding-right: 35px;
  color: #414040;
}
.input-small {
  border-bottom: solid 1px black;
  height: 16px;
  font-size: 14px;
  line-height: 16;
}
.input-large {
  border-bottom: solid 2px black;
  height: 21px;
  line-height: 21px;
  font-size: 18px;
}
.icon {
  color: #414040;
}
.left {
  margin-right: -30px;
}
.right {
  margin-left: -30px;
}
.icon-input:hover {
  .icon {
    color: black;
  }
  input {
    color: black;
  }
}
</style>
