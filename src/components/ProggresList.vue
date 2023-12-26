<!-- eslint-disable prettier/prettier -->
<template>
  <ul class="progress__list" :class="{active: progressState}">
    <ProggresListItem
      v-for="(step, index) in progresItems"
      :key="step.id"
      :step_data="step"
      :class="{ current: index === currentStep  }" />
    <button class="progress__list-close" @click="closeListFunction">+</button>

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

  props: {
    progressState: {
      type: Boolean,
      default: false,
    },
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
        {
          step: "step 9",
          id: 9,
          reward: 4000,
        },
        {
          step: "step 10",
          id: 10,
          reward: 8000,
        },
        {
          step: "step 11",
          id: 11,
          reward: 16000,
        },
        {
          step: "step 12",
          id: 12,
          reward: 4000,
        },
      ],
    };
  },

  methods: {
    closeListFunction() {
      this.$emit("changeProgressState");
    },
  },

  computed: {
    ...mapState({
      currentStep: (state) => state.currentStep,
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/progres.scss";
</style>
