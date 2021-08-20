<template>
  <body>
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
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(employee, index) in employees" v-bind:key="index">
            <td>{{ employee.fname }}</td>
            <td>{{ employee.lname }}</td>
            <td><img v-bind:src="employee.photo" class="imgg" /></td>
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
            <td>
              <button
                type="button"
                class="btn btn-outline-primary"
                v-on:click="editRow(employee)"
              >
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="wrapper" style="background-color:#23272a">
      <div class="title">
        {{ hello }}
      </div>
      <form
        style="background-color:#23272a"
        class="form"
        action="javascript:void(0)"
        id="textareaInput"
        ref="formm"
        @submit="Submitt"
      >
        <div class="inputfield">
          <label>First Name</label>
          <input type="text" class="input" v-model="employee1.fname" required />
        </div>
        <div class="inputfield">
          <label>Last Name</label>
          <input type="text" class="input" v-model="employee1.lname" required />
        </div>
        <div class="inputfield" style="background-color:#23272a">
          <label>Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            class="input"
            style="background-color:#23272a"
            @change="encodeImageFileAsURL()"
            required
          />
        </div>
        <div class="inputfield">
          <label>Email Address</label>
          <input type="text" class="input" v-model="employee1.email" required />
        </div>
        <div class="inputfield">
          <label>Gender</label>
          <div class="custom_select">
            <select class="selectt" v-model="employee1.sex" required>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div class="inputfield">
          <label>Birthdate</label>
          <input
            type="date"
            name="bday"
            id="bday"
            class="input"
            v-model="employee1.bday"
            required
          />
        </div>
        <div class="inputfield">
          <input type="submit" value="Submit" class="btn" />
        </div>
      </form>
      <div class="cccc">
        <button type="button" class="btn btn-dark" v-on:click="clear()">
          Clear/Cancel
        </button>
      </div>
    </div>
  </body>
</template>

<script>
function getRandomIntInclusive() {
  var min = 0;
  var max = 100000000000;
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
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
        photo: null,
        email: null,
        sex: null,
        bday: null,
      },
      employee1: {
        id: "",
        fname: "",
        lname: "",
        photo: "",
        email: "",
        sex: "",
        bday: "",
      },
      hello: "ADD A NEW EMPLOYEE",
    };
  },

  methods: {
    deleteRow(id) {
      db.collection("users")
        .doc(id)
        .delete();
    },
    encodeImageFileAsURL() {
      const file = document.querySelector("input[type=file]").files[0];
      const reader = new FileReader();
      var that = this;
      reader.addEventListener(
        "load",
        function() {
          that.employee1.photo = reader.result;
        },
        false
      );

      if (file) {
        reader.readAsDataURL(file);
      }
    },
    Submitt() {
      const idd = getRandomIntInclusive().toString();

      if (this.employee1.id === "") {
        db.collection("users")
          .doc(idd)
          .set({
            id: idd,
            fname: this.employee1.fname,
            lname: this.employee1.lname,
            photo: this.employee1.photo,
            email: this.employee1.email,
            sex: this.employee1.sex,
            bday: this.employee1.bday,
          });
      } else {
        db.collection("users")
          .doc(this.employee1.id)
          .set({
            id: this.employee1.id,
            fname: this.employee1.fname,
            lname: this.employee1.lname,
            photo: this.employee1.photo,
            email: this.employee1.email,
            sex: this.employee1.sex,
            bday: this.employee1.bday,
          });
      }
      this.$refs.formm.reset();
      this.hello = "ADD A NEW EMPLOYEE";
    },
    editRow(employee) {
      this.employee1 = employee;
      this.hello = "Edit Employee";
    },
    clear() {
      this.$refs.formm.reset();
      this.hello = "ADD A NEW EMPLOYEE";
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
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");
table {
  margin-top: 25vh;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  color: #a0a0a0;
  text-align: center;
}
td {
  vertical-align: middle;
}
.wrapper {
  text-align: center;
}
.btn {
  color: #a0a0a0;
}
.cccc {
  margin-top: 2vh;
}

.imgg {
  width: 3vw;
  height: 6vh;
  border-radius: 50%;
}
.wrapper {
  max-width: 500px;
  width: 100%;
  background: #fff;
  margin: 20px auto;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.125);
  padding: 30px;
}

.wrapper .title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 25px;
  color: #a0a0a0;
  text-transform: uppercase;
  text-align: center;
}

.wrapper .form {
  width: 100%;
}

.wrapper .form .inputfield {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.wrapper .form .inputfield label {
  width: 200px;
  color: #a0a0a0;
  margin-right: 10px;
  font-size: 14px;
}

.wrapper .form .inputfield .input,
.wrapper .form .inputfield .textarea .selectt {
  width: 100%;
  outline: none;

  font-size: 15px;
  padding: 8px 10px;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.wrapper .form .inputfield .textarea {
  width: 100%;
  height: 125px;
  resize: none;
}

.wrapper .form .inputfield .custom_select {
  position: relative;
  width: 100%;
  height: 37px;
}

.wrapper .form .inputfield .custom_select:before {
  content: "";
  position: absolute;
  top: 12px;
  right: 10px;
  border: 8px solid;
  border-color: #a0a0a0 transparent transparent transparent;
  pointer-events: none;
}

.wrapper .form .inputfield .custom_select select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  width: 100%;
  height: 100%;
  border: 0px;
  padding: 8px 10px;
  font-size: 15px;

  border-radius: 3px;
}

.wrapper .form .inputfield .input:focus,
.wrapper .form .inputfield .textarea:focus,
.wrapper .form .inputfield .custom_select select:focus {
  border: 1px solid #28283d;
}

.wrapper .form .inputfield p {
  font-size: 14px;
  color: #a0a0a0;
}
.wrapper .form .inputfield .check {
  width: 15px;
  height: 15px;
  position: relative;
  display: block;
  cursor: pointer;
}
.wrapper .form .inputfield .check input[type="checkbox"] {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
.wrapper .form .inputfield .check .checkmark {
  width: 15px;
  height: 15px;
  border: 1px solid #28283d;
  display: block;
  position: relative;
}
.wrapper .form .inputfield .check .checkmark:before {
  content: "";
  position: absolute;
  top: 1px;
  left: 2px;
  width: 5px;
  height: 2px;
  border: 2px solid;
  transform: rotate(-45deg);
  display: none;
}

.wrapper
  .form
  .inputfield
  .check
  input[type="checkbox"]:checked
  ~ .checkmark:before {
  display: block;
}

.wrapper .form .inputfield .btn {
  width: 100%;
  padding: 8px 10px;
  font-size: 15px;
  border: 0px;
  background: #28283d;
  color: #a0a0a0;
  cursor: pointer;
  border-radius: 3px;
  outline: none;
}

.wrapper .form .inputfield .btn:hover {
  background: #28283d;
}

.wrapper .form .inputfield:last-child {
  margin-bottom: 0;
}
.input {
  background-color: #23272a;
  color: #a0a0a0;
}
.selectt {
  background-color: #23272a;
  color: #a0a0a0;
}

@media (max-width: 420px) {
  .wrapper .form .inputfield {
    flex-direction: column;
    align-items: flex-start;
  }
  .wrapper .form .inputfield label {
    margin-bottom: 5px;
  }
  .wrapper .form .inputfield.terms {
    flex-direction: row;
  }
}
input[type="file"]::file-selector-button {
  border: 2px solid #a0a0a0;
  padding: 0.2em 0.4em;
  border-radius: 0.2em;
  background-color: #23272a;
  transition: 1s;
  color: #a0a0a0;
}
</style>
