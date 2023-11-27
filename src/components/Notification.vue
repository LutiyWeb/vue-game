<template>
  <div class="notification" :class="{ active: isProgresState }">
    <div class="notification_bg"></div>
    <div class="notification-popup">
      <div class="notification-popup__close" @click="hidePopup">+</div>
      <div class="notification-popup__title">{{ notificationTitle }}</div>
      <div class="notification-popup__text"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Notification",

  data() {
    return {
      notificationTitle: "К сожалению ваш ответ не верен. Попробуте ещё",
    };
  },

  computed: {
    ...mapState({
      isProgresState: (state) => state.isProgres,
    }),
  },

  methods: {
    hidePopup() {
      this.isProgresState = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/notification.scss";
</style>
