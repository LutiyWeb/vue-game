<template>
  <div class="game">
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>

    <Timer @timerFinish="failUnswere" :resetTimer="stopTimer" />
    <Result :point="userPoint" />

    <div class="game__container container">
      <div class="game__content">
        <div class="game-img">
          <img :src="require('@/assets/image/' + currentImg)" />
          <div class="game-text">
            <span v-if="defaultText">Выберете один из ваниантов</span>
            <span v-if="progressText">Проверяем ваш ответ</span>
            <span v-if="correctUnswereText"
              >Вы сделали правильный выбор!! давайте двигаться дальше</span
            >
            <span v-if="inCorrectUnswereText"
              >К сожалению вы ошиблись. Давайте попробуем ещё раз</span
            >
          </div>
        </div>
        <Question
          @getUnswere="changeImage"
          @checkTheUnswer="changeText"
          @nextStep="nextStep = true"
        />
      </div>
      <Proggres :nextStep="nextStep" />
    </div>
  </div>
</template>

<script>
import Question from "@/components/Question.vue";
import Proggres from "@/components/Proggres.vue";
import Result from "@/components/Result.vue";
import Timer from "@/components/Timer.vue";
import { mapMutations, mapState } from "vuex";

export default {
  name: "Game",
  components: {
    Question,
    Proggres,
    Result,
    Timer,
  },

  data() {
    return {
      currentImg: "panda.png",
      currentItem: {},
      defaultText: true,
      progressText: false,
      correctUnswereText: false,
      inCorrectUnswereText: false,
      userPoint: 0,
      stopTimer: false,
      nextStep: false,
    };
  },

  computed: {
    ...mapState({
      currentStep: (state) => state.currentStep,
    }),
  },

  methods: {
    ...mapMutations({
      changeStep: "changeStep",
    }),

    changeText(value) {
      this.stopTimer = value.reset;

      if (value.item.isProgres === "isProgres") {
        this.defaultText = false;
        this.progressText = true;
        this.currentImg = "panda-wait.png";
      }
    },
    changeImage(item) {
      this.currentItem = item;

      if (this.currentItem.value) {
        this.currentImg = "funny-panda.png";
        this.progressText = false;
        this.correctUnswereText = true;
        this.userPoint += 10;
      } else {
        this.currentImg = "sad-panda.png";
        this.progressText = false;
        this.inCorrectUnswereText = true;
        if (this.userPoint > 0) {
          this.userPoint -= 10;
        }
      }

      setTimeout(() => {
        this.currentImg = "panda.png";
        this.defaultText = true;
        this.correctUnswereText = false;
        this.inCorrectUnswereText = false;
      }, 5000);
    },

    failUnswere() {
      if (this.userPoint >= 0) {
        this.userPoint -= 10;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/game.scss";
</style>
