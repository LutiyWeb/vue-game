<template>
  <div class="app">
    <Game />
  </div>
</template>

<script>
import Game from "@/components/Game.vue";
export default {
  name: "App",
  components: {
    Game,
  },
};
</script>

<style lang="scss">
:root {
  --main-white: #fff;
  --main-dark: #5c5e6d;
  --secondary-dark: #687192;
  --accent-color: #3ded97;
  --addit-color: #f9603e;
  --main-bg: #171921;
}

* {
  padding: 0;
  margin: 0;
  border: 0;
}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

html,
body {
  height: 100%;
  width: 100%;
  line-height: 1;
  -ms-text-size-adjust: 100%;

  &.block-scroll {
    overflow: hidden;
  }
}

html {
  scroll-behavior: smooth;
}

body {
  font-size: 14px;
  line-height: 1.3;
  font-family: "Open Sans", sans-serif;
  color: var(--main-white);
  background-color: var(--main-bg);
}

.content {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
}

.app {
  @media screen and (min-width: 768px) {
    height: 100vh;
  }
}

nav,
footer,
header,
aside {
  display: block;
}

input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a {
  display: block;
  color: inherit;
}

a:focus,
a:active {
  outline: none;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  height: auto;
  max-width: 100%;
  display: block;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
  font-family: "Montserrat", sans-serif;
}

h1 {
  font-size: 32px;
  font-weight: 500;
}

h2 {
  font-size: 46px;
  font-weight: 600;
}

h3 {
  font-size: 24px;
  font-weight: 600;
}

.title {
  color: var(--main-white);
  line-height: 1.25;
  font-weight: 800;
}

.container {
  width: 100%;
  max-width: 1440px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  position: relative;
}

.page {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow: hidden;
}

.content {
  flex: 1 0 auto;
}

/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: auto;
  scrollbar-color: #687192 #ffffff;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 6px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: #687192;
  border-radius: 10px;
}
</style>
