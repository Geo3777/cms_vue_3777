<template>
  <body>
    <div class="container-fluid  ">
      <div class="starts fixed-top">
        <Headerr></Headerr>
      </div>
      <div class="tabel1">
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
  background-color: #28283d;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
