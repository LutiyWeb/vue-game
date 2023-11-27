<template>
  <ul class="progress__controls">
    <ProggresControlsBtn />
  </ul>
</template>

<script>
import ProggresControlsBtn from "@/components/ProggresControlsBtn.vue";
export default {
  name: "ProgressControls",
  components: {
    ProggresControlsBtn,
  },
};
</script>
