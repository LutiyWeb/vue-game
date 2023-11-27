<!-- eslint-disable prettier/prettier -->
<template>
  <ul class="progress__controls-btn controls-btn">
    <li class="controls-btn__item" v-for="btn in controlsList" :key="btn.id">
      <div class="controls-btn__text">{{ btn.content }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ProgressControlsBtn",

  data() {
    return {
      controlsList: [
        {
          id: 1,
          content: "50 / 50",
          use: false,
        },
        {
          id: 2,
          content: "Call",
          use: false,
        },
        {
          id: 1,
          content: "Help",
          use: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/progres.scss";
</style>
