<template>
  <div class="tabell table-responsive">
    <table class="table table-hover table-dark ">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Bithdate</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in employees" v-bind:key="index">
          <td>{{ employee.fname }}</td>
          <td>{{ employee.lname }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.sex }}</td>
          <td>{{ employee.bday }}</td>
          <td>
            <button
              v-on:click="deleteRow(employee.id)"
              type="button"
              class="btn btn-outline-danger "
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="wrapper">
    <button type="button" class="btn btn-dark btn-lg">Load More</button>
  </div>
</template>

<script>
import db from "@/fb";
export default {
  name: "Tabel",
  data() {
    return {
      employees: [],
      employee: {
        id: null,
        fname: null,
        lname: null,
        //photo: null,
        email: null,
        sex: null,
        bday: null,
      },
    };
  },

  methods: {
    deleteRow(id) {
      db.collection("users")
        .doc(id)
        .delete();
    },
  },

  created() {
    db.collection("users").onSnapshot((snap) => {
      this.employees = [];
      snap.forEach((doc) => {
        this.employees.push(doc.data());
      });
    });
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
