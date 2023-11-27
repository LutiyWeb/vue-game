<template>
  <div class="progress">
    <ProggresControls />
    <ProggresList />
  </div>
</template>

<script>
import ProggresControls from "@/components/ProggresControls.vue";
import ProggresList from "@/components/ProggresList.vue";
export default {
  name: "Progress",
  components: {
    ProggresControls,
    ProggresList,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/progres.scss";
</style>
