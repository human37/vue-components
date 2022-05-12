<template>
  <label title="progress stepper">
    <ol type="1">
      <li class="step" v-for="(step, index) in steps" :key="index">
        <span
          class="icon"
          :class="
            index === this.currentStep
              ? 'icon-current'
              : index > this.currentStep
              ? 'icon-future'
              : ''
          "
        >
          <mdicon :name="index < this.currentStep ? 'check' : 'circle'" />
        </span>
        <span v-if="index != 0 && index <= this.currentStep" class="line" />
        <div class="step-text">
          <div class="label-header">STEP {{ index }}</div>
          <div class="label-title">{{ step }}</div>
        </div>
      </li>
    </ol>
  </label>
</template>

<script>
/**
 * Accessible progress stepper for showing progress steps.
 * @example
 * <ProgressStepper :steps="steps" />
 */
export default {
  props: {
    /**
     * The steps for the progress stepper.
     * @steps Array
     */
    steps: {
      type: Array,
      default: () => [],
    },
    /**
     * The current step for the progress stepper.
     * @step Number
     */
    currentStep: {
      type: Number,
      default: () => 0,
    },
  },
};
</script>

<style lang="scss" scoped>
ol {
  padding-left: 0;
}
.step {
  text-align: left;
  display: block;
  padding: 5px;
  margin-bottom: 20px;
}
.step-text {
  display: inline-block;
  padding-left: 20px;
}
.line {
  border-left: 3px solid #f3344a;
  display: inline-block;
  margin-left: -15px;
  margin-right: 12px;
  margin-bottom: 15px;
  margin-top: -40px;
  height: 50px;
}
.label-header {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 14px;
  text-transform: uppercase;
  color: #496970;
}
.label-title {
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 23px;
  color: #27474e;
}
.icon {
  background: #f3344a;
  color: white;
  border: 1px solid #f3344a;
  border-radius: 20px;
  padding-bottom: 4px;
  padding-top: 2px;
  min-width: 20px;
}
.icon-current {
  color: #f4d7da;
}
.icon-future {
  color: #ebf0f1;
  background: none;
  border: 1px solid #678c94;
}
</style>
