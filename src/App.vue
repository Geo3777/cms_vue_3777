<template>
  <body>
    <div class="container-fluid flex-column ">
      <div class="starts fixed-top">
        <Headerr></Headerr>
      </div>
      <div class="contents">
        <Tabel></Tabel>
      </div>
    </div>
  </body>
</template>

<script>
import Headerr from "./components/Headerr.vue";
import Tabel from "./components/Tabel.vue";
export default {
  name: "App",
  components: {
    Headerr,
    Tabel,
  },
};
</script>

<style>
body {
  background-image: url("../src/assets/wp.jpg");
}
.container {
  justify-content: center;
 
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
