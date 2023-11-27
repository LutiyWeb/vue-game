<template>
  <li class="progress__list-item progres-item">
    <div class="progres-item-step">{{ step_data.step }} <span></span></div>
    <div class="progres-item-reward">{{ step_data.reward }}</div>
  </li>
</template>

<script>
export default {
  name: "ProgressListItem",
  props: {
    step_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/progres.scss";
</style>
