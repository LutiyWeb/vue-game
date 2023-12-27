<template>
  <div
    class="question"
    v-for="item in questionList"
    :key="item.id"
    :class="{ current: item.current }"
    v-html="item.text"
  ></div>
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
      @click="checkQuestion(item)"
    >
      <div class="unswers__item-position">
        {{ item.position }}
      </div>
      <div class="unswers__item-text">
        <span v-html="item.text"></span>
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
      postList: [],
      questionList: [
        {
          id: 1,
          step: 1,
          text: "Где можно использовать JavaScript?",
          current: true,
          unswers: [
            {
              text: "серверные приложения",
              id: 1,
              position: "a",
              value: false,
            },
            {
              text: "мобильные приложения",
              id: 2,
              position: "b",
              value: false,
            },
            {
              text: "веб-приложения",
              id: 3,
              position: "c",
              value: false,
            },
            {
              text: "можно во всех перечисленных",
              id: 4,
              position: "d",
              value: true,
            },
          ],
        },
        {
          id: 2,
          step: 2,
          text:
            "Какое количество сообщений будет выведено в консоль? <div class='question__select'> for ( var i = 10; i < 35; i += 5 ) { " +
            "<div>console.log(i);</div>" +
            " } <div/>",
          current: false,
          unswers: [
            {
              text: "25",
              id: 5,
              position: "a",
              value: false,
            },
            {
              text: "5",
              id: 6,
              position: "b",
              value: false,
            },
            {
              text: "6",
              id: 7,
              position: "c",
              value: false,
            },
            {
              text: "15",
              id: 8,
              position: "d",
              value: true,
            },
          ],
        },
        {
          id: 3,
          step: 3,
          text: "В чем отличие между локальной и глобальной переменной?",
          current: false,
          unswers: [
            {
              text: "локальные видны повсюду, глобальные только в функциях",
              id: 9,
              position: "a",
              value: false,
            },
            {
              text: "глобальные можно переопределять, локальные нельзя",
              id: 10,
              position: "b",
              value: false,
            },
            {
              text: "локальные можно переопределять, глобальные нельзя",
              id: 11,
              position: "c",
              value: false,
            },
            {
              text: "глобальные видны повсюду, локальные только в функциях",
              id: 12,
              position: "d",
              value: true,
            },
          ],
        },
        {
          id: 4,
          step: 4,
          text: "Какая переменная записана неверно?",
          current: false,
          unswers: [
            {
              text: 'var num = "STRING";',
              id: 13,
              position: "a",
              value: false,
            },
            {
              text: "var isDone = 0;",
              id: 14,
              position: "b",
              value: false,
            },
            {
              text: "var b = false;",
              id: 15,
              position: "c",
              value: false,
            },
            {
              text: "var number = 12,5",
              id: 16,
              position: "d",
              value: true,
            },
          ],
        },
        {
          id: 5,
          step: 5,
          text: "В чем разница между confirm и prompt?",
          current: false,
          unswers: [
            {
              text: "ничем не отличаются",
              id: 17,
              position: "a",
              value: false,
            },
            {
              text: "prompt вызывает диалоговое окно с полем для ввода, confirm - окно с подтверждением",
              id: 18,
              position: "b",
              value: false,
            },
            {
              text: "prompt ничего не вызывает",
              id: 19,
              position: "c",
              value: false,
            },
            {
              text: "confirm вызывает диалоговое окно с полем для ввода, prompt - окно с подтверждением",
              id: 20,
              position: "d",
              value: true,
            },
          ],
        },
        {
          id: 6,
          step: 6,
          text: "Язык JavaScript является подвидом языка Java - верно?",
          current: false,
          unswers: [
            {
              text: "наоборот, Java - подвид JavaScript",
              id: 21,
              position: "a",
              value: false,
            },
            {
              text: "Да",
              id: 22,
              position: "b",
              value: false,
            },
            {
              text: "Нет",
              id: 23,
              position: "c",
              value: false,
            },
            {
              text: "JavaScript єто надстройка над Java",
              id: 24,
              position: "d",
              value: true,
            },
          ],
        },
        {
          id: 7,
          step: 7,
          text: "alert(str);\n" + 'var str = "Hello"; ',
          current: false,
          unswers: [
            {
              text: "Hello",
              id: 25,
              position: "a",
              value: false,
            },
            {
              text: "undefined",
              id: 26,
              position: "b",
              value: false,
            },
            {
              text: "будет ошибка",
              id: 27,
              position: "c",
              value: false,
            },
            {
              text: "вернётся null",
              id: 28,
              position: "d",
              value: true,
            },
          ],
        },
        {
          id: 8,
          step: 8,
          text: "Что выведет этот код? let y = 1; let x = y = 2; alert(x);",
          current: false,
          unswers: [
            {
              text: "1",
              id: 29,
              position: "a",
              value: false,
            },
            {
              text: "2",
              id: 30,
              position: "b",
              value: false,
            },
            {
              text: "x",
              id: 31,
              position: "c",
              value: false,
            },
            {
              text: "y = 2",
              id: 32,
              position: "d",
              value: true,
            },
          ],
        },
        {
          id: 9,
          step: 9,
          text:
            "Чему равно i в конце кода? for(var i=0; i<10; i++) {\n" +
            "    ...\n" +
            "}\n" +
            "alert(i);",
          current: false,
          unswers: [
            {
              text: "undefind",
              id: 29,
              position: "a",
              value: false,
            },
            {
              text: "9",
              id: 30,
              position: "b",
              value: false,
            },
            {
              text: "10",
              id: 31,
              position: "c",
              value: false,
            },
            {
              text: "нет такой переменной после цикла",
              id: 32,
              position: "d",
              value: true,
            },
          ],
        },
        {
          id: 10,
          step: 10,
          text: "Как объявить функцию в JavaScript?",
          current: false,
          unswers: [
            {
              text: "function:MyFunction()",
              id: 29,
              position: "a",
              value: false,
            },
            {
              text: "function MyFunction()",
              id: 30,
              position: "b",
              value: false,
            },
            {
              text: "function = MyFunction()",
              id: 31,
              position: "c",
              value: false,
            },
            {
              text: "function = New MyFunction()",
              id: 32,
              position: "d",
              value: true,
            },
          ],
        },
        {
          id: 11,
          step: 11,
          text: "Какое из этих ключевых слов ООП не используется в JavaScript?",
          current: false,
          unswers: [
            {
              text: "new",
              id: 29,
              position: "a",
              value: false,
            },
            {
              text: "instanceOf",
              id: 30,
              position: "b",
              value: false,
            },
            {
              text: "this",
              id: 31,
              position: "c",
              value: false,
            },
            {
              text: "все есть",
              id: 32,
              position: "d",
              value: true,
            },
          ],
        },
        {
          id: 12,
          step: 12,
          text: "JSON - это.",
          current: false,
          unswers: [
            {
              text: "JavaScript Object Notation",
              id: 29,
              position: "a",
              value: false,
            },
            {
              text: "название следующей версии JavaScript",
              id: 30,
              position: "b",
              value: false,
            },
            {
              text: "JavaScript Over Network",
              id: 31,
              position: "c",
              value: false,
            },
            {
              text: "имя создателя JavaScript",
              id: 32,
              position: "d",
              value: true,
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
    }),

    checkQuestion(item) {
      item.isProgres = "isProgres";
      this.$emit("checkTheUnswer", { item, reset: true });

      setTimeout(() => {
        let index = this.questionList.findIndex((item) => {
          return item.current;
        });
        if (item.value) {
          item.isProgres = "isTrue";
          setTimeout(() => {
            this.$emit("nextStep");
            this.$emit("checkTheUnswer", { item, reset: false });
          }, 3000);
        } else {
          // this.questionList.forEach((item, index) => {
          //   if (index > 0) {
          //     item.current = false;
          //   } else {
          //     item.current = true;
          //   }
          // });
          item.isProgres = "isFalse";
          setTimeout(() => {
            this.$emit("checkTheUnswer", { item, reset: false });
            delete item.isProgres;
          }, 3000);
        }
        setTimeout(() => {
          this.changeStep(index + 1);
          this.questionList[index].current = false;
          this.questionList[index + 1].current = true;
        }, 3000);

        this.$emit("getUnswere", item);
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/question.scss";
</style>
