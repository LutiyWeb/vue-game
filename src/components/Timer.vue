<template>
  <div class="timer" :class="{ acces: resetTimer }">{{ defaultValue }}</div>
</template>

<script>
const defaultValue = 120;
export default {
  name: "Timer",
  props: {
    resetTimer: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      defaultValue: defaultValue,
      checkTimer: null,
    };
  },

  computed: {},

  watch: {
    resetTimer(newValue) {
      if (newValue) {
        clearInterval(this.checkTimer);
      } else {
        this.runTimer();
      }
    },
  },

  methods: {
    runTimer() {
      this.defaultValue = defaultValue;
      this.checkTimer = setInterval(() => {
        this.defaultValue -= 1;
        if (this.defaultValue === 0) {
          this.$emit("timerFinish");
          clearInterval(this.checkTimer);
        }
      }, 1000);
    },
  },

  mounted() {
    this.runTimer();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/timer.scss";
</style>
