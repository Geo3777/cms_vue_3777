<template>
  <body>
    <div class="container flex-column">
      <Headerr></Headerr>
    </div>
  </body>
</template>

<script>
import Headerr from "./components/Headerr.vue";
//import Tabel from './components/Tabel.vue'
export default {
  name: "App",
  components: {
    Headerr,
    //Tabel
  },
};
</script>

<style>
body {
  background-image: url("../src/assets/wp.jpg");
}
.container {
  margin: 0 !important;
  justify-content: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
