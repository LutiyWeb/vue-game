<template>
  <div class="game">
    <!--    <Notification />-->

    <div class="game__container container">
      <div class="game__content">
        <div class="game-img">
          <img :src="require('@/assets/image/' + currentImg)" />
          <div class="game-text">{{ currentText }}</div>
        </div>
        <Question @getUnswere="changeImage" @checkTheUnswer="changeText" />
      </div>
      <Proggres />
    </div>
  </div>
</template>

<script>
import Question from "@/components/Question.vue";
import Proggres from "@/components/Proggres.vue";
// import Notification from "@/components/Notification.vue";
export default {
  name: "Game",
  components: {
    Question,
    Proggres,
    // Notification,
  },

  data() {
    return {
      currentImg: "panda.png",
      currentItem: {},
      currentText: "Выберете один из ваниантов",
    };
  },

  methods: {
    changeText(item) {
      if (item.isProgres === "isProgres") {
        this.currentText = "Проверяем ваш ответ";
        this.currentImg = "panda-wait.png";
      }
    },
    changeImage(item) {
      this.currentItem = item;

      if (this.currentItem.value) {
        this.currentImg = "funny-panda.png";
        this.currentText =
          "Вы сделали правильный выбор!! давайте двигаться дальше";
      } else {
        this.currentImg = "sad-panda.png";
        this.currentText = "К сожалению вы ошиблись. Давайте попробуем ещё раз";
      }

      setTimeout(() => {
        this.currentImg = "panda.png";
        this.currentText = "Выберете один из ваниантов";
      }, 10000);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/game.scss";
</style>
