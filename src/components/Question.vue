<!-- eslint-disable prettier/prettier -->
<template>
  <div
    class="question"
    v-for="item in questionList"
    :key="item.id"
    :class="{ current: item.current }">
    {{ item.text }}
  </div>
  <ul class="unswers">
    <li
      class="unswers__item"
      v-for="(item, index) in currentUnswers"
      :key="index"
      :class="{
        isProgres: item.isProgres === 'isProgres',
        isFalse: item.isProgres === 'isFalse',
        isTrue: item.isProgres === 'isTrue',
      }"
      @click="checkQuestion(item)">
      <div class="unswers__item-position">
        {{ item.position }}
      </div>
      <div class="unswers__item-text">
        {{ item.text }}
      </div>
    </li>
  </ul>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Question",
  data() {
    return {
      activeClassButton: "item_recording_buttons_accessible",
      inActiveClassButton: "item_recording_buttons_inaccessible",
      questionList: [
        {
          id: 1,
          step: 1,
          text: "question 1",
          current: true,
          unswers: [
            {
              text: "Unswere 1",
              id: 1,
              position: "a",
              value: false,
            },
            {
              text: "Unswere 2",
              id: 2,
              position: "b",
              value: false,
            },
            {
              text: "Unswere 3",
              id: 3,
              position: "c",
              value: false,
            },
            {
              text: "Unswere 4",
              id: 4,
              position: "d",
              value: true,
            },
          ],
        },
        {
          id: 2,
          step: 2,
          text: "question 2",
          current: false,
          unswers: [
            {
              text: "Unswere 5",
              id: 5,
              position: "a",
              value: false,
            },
            {
              text: "Unswere 6",
              id: 6,
              position: "b",
              value: false,
            },
            {
              text: "Unswere 7",
              id: 7,
              position: "c",
              value: false,
            },
            {
              text: "Unswere 8",
              id: 8,
              position: "d",
              value: true,
            },
          ],
        },
        {
          id: 3,
          step: 3,
          text: "question 3",
          current: false,
          unswers: [
            {
              text: "Unswere 9",
              id: 9,
              position: "a",
              value: false,
            },
            {
              text: "Unswere 10",
              id: 10,
              position: "b",
              value: false,
            },
            {
              text: "Unswere 11",
              id: 11,
              position: "c",
              value: false,
            },
            {
              text: "Unswere 12",
              id: 12,
              position: "d",
              value: true,
            },
          ],
        },
        {
          id: 4,
          step: 4,
          text: "question 4",
          current: false,
          unswers: [
            {
              text: "Unswere 13",
              id: 13,
              position: "a",
              value: false,
            },
            {
              text: "Unswere 14",
              id: 14,
              position: "b",
              value: false,
            },
            {
              text: "Unswere 15",
              id: 15,
              position: "c",
              value: true,
            },
            {
              text: "Unswere 16",
              id: 16,
              position: "d",
              value: false,
            },
          ],
        },
        {
          id: 5,
          step: 5,
          text: "question 5",
          current: false,
          unswers: [
            {
              text: "Unswere 17",
              id: 17,
              position: "a",
              value: false,
            },
            {
              text: "Unswere 18",
              id: 18,
              position: "b",
              value: false,
            },
            {
              text: "Unswere 19",
              id: 19,
              position: "c",
              value: false,
            },
            {
              text: "Unswere 20",
              id: 20,
              position: "d",
              value: true,
            },
          ],
        },
        {
          id: 6,
          step: 6,
          text: "question 6",
          current: false,
          unswers: [
            {
              text: "Unswere 21",
              id: 21,
              position: "a",
              value: false,
            },
            {
              text: "Unswere 22",
              id: 22,
              position: "b",
              value: false,
            },
            {
              text: "Unswere 23",
              id: 23,
              position: "c",
              value: false,
            },
            {
              text: "Unswere 24",
              id: 24,
              position: "d",
              value: true,
            },
          ],
        },
        {
          id: 7,
          step: 7,
          text: "question 7",
          current: false,
          unswers: [
            {
              text: "Unswere 25",
              id: 25,
              position: "a",
              value: false,
            },
            {
              text: "Unswere 26",
              id: 26,
              position: "b",
              value: false,
            },
            {
              text: "Unswere 27",
              id: 27,
              position: "c",
              value: false,
            },
            {
              text: "Unswere 28",
              id: 28,
              position: "d",
              value: true,
            },
          ],
        },
        {
          id: 8,
          step: 8,
          text: "question 8",
          current: false,
          unswers: [
            {
              text: "Unswere 29",
              id: 29,
              position: "a",
              value: false,
            },
            {
              text: "Unswere 30",
              id: 30,
              position: "b",
              value: false,
            },
            {
              text: "Unswere 31",
              id: 31,
              position: "c",
              value: true,
            },
            {
              text: "Unswere 32",
              id: 32,
              position: "d",
              value: false,
            },
          ],
        },
      ],
    };
  },

  computed: {
    currentUnswers() {
      let result = this.questionList.find((item) => {
        return item.current;
      });
      return result.unswers;
    },
  },

  methods: {
    ...mapMutations({
      changeStep: "changeStep",
      // togglePopup: "togglePopup",
    }),

    checkQuestion(item) {
      item.isProgres = "isProgres";
      this.$emit("checkTheUnswer", item);

      setTimeout(() => {
        if (item.value) {
          let index = this.questionList.findIndex((item) => {
            return item.current;
          });
          item.isProgres = "isTrue";
          setTimeout(() => {
            this.questionList[index].current = false;
            this.questionList[index + 1].current = true;
            this.changeStep(index + 1);
          }, 10000);
        } else {
          this.questionList.forEach((item, index) => {
            if (index > 0) {
              item.current = false;
            } else {
              item.current = true;
            }
          });
          item.isProgres = "isFalse";
          setTimeout(() => {
            this.changeStep(0);
            delete item.isProgres;
          }, 10000);
        }
        this.$emit("getUnswere", item);
      }, 10000);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/question.scss";
</style>
