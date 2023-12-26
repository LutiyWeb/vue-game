<template>
  <div class="progress">
    <div class="progress__inner">
      <ProggresList />
      <div class="progress__bar">
        <span :style="{ maxHeight: changeProgresBar }"></span>
      </div>
    </div>
  </div>
</template>

<script>
import ProggresList from "@/components/ProggresList.vue";
import { mapState } from "vuex";
export default {
  name: "Progress",
  components: {
    ProggresList,
  },
  props: {
    nextStep: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },

  computed: {
    ...mapState({
      currentStep: (state) => state.currentStep,
    }),

    changeProgresBar() {
      return `${(this.currentStep + 1) * 8.33}%`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/progres.scss";
</style>
