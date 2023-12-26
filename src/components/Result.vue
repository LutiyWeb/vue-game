<template>
  <div class="result">Total: {{ point }}</div>
</template>

<script>
export default {
  name: "Result",
  props: {
    point: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },

  computed: {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/result.scss";
</style>
