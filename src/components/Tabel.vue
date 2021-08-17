<template>
  <div class="tabell table-responsive">
    <table class="table table-hover table-dark ">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Picture</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Bithdate</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="wrapper">
    <button type="button" class="btn btn-dark btn-lg">Load More</button>
  </div>
</template>

<script>
export default {
  name: "Tabel",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  margin-top: 25vh;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  color: #a0a0a0;
}
.wrapper {
  text-align: center;
}
.btn {
  color: #a0a0a0;
}
</style>
