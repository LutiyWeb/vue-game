<!-- eslint-disable prettier/prettier -->
<template>
  <ul class="progress__list">
    <ProggresListItem
      v-for="(step, index) in progresItems"
      :key="step.id"
      :step_data="step"
      :class="{ current: index === count  }" />
  </ul>
</template>

<script>
import ProggresListItem from "@/components/ProggresListItem.vue";
import { mapState } from "vuex";
export default {
  name: "ProgressList",
  components: {
    ProggresListItem,
  },

  data() {
    return {
      progresItems: [
        {
          step: "step 1",
          id: 1,
          reward: 100,
        },
        {
          step: "step 2",
          id: 2,
          reward: 200,
        },
        {
          step: "step 3",
          id: 3,
          reward: 500,
        },
        {
          step: "step 4",
          id: 4,
          reward: 1000,
        },
        {
          step: "step 5",
          id: 5,
          reward: 2000,
        },
        {
          step: "step 6",
          id: 6,
          reward: 4000,
        },
        {
          step: "step 7",
          id: 7,
          reward: 8000,
        },
        {
          step: "step 8",
          id: 8,
          reward: 16000,
        },
      ],
    };
  },

  computed: {
    ...mapState({
      count: (state) => state.currentStep,
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/progres.scss";
</style>
