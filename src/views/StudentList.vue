<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-card class="mx-auto" >
          <v-img
          src="../assets/play.png"
          width="50"
          class="ml-6"
          ></v-img>
          <template v-slot:title> Started </template>

          <v-card-text> <p>{{users.exam_started}} </p></v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="mx-auto" >
          <v-img
          src="../assets/exam.png"
          width="50"
          class="ml-6"
          ></v-img>
          <template v-slot:title> Finished </template>

          <v-card-text> {{users.exam_finish}} </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-card>
    <v-card-title>
      Student List
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        dense
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="users.users"
      item-key="ID"
      :search="search"
      @click:row="handleRowClick"
      class="pa-6"
    >
    </v-data-table>
    <!-- <table class="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Firstname</th>
          <th>Mobile</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        
        <tr v-for="user in users.users" :key="user.ID">
          <td>{{ user.ID }}</td>
          <td>{{ user.Lastname }}</td>
          <td>{{ user.Firstname }}</td>
          <td>{{ user.Middlename }}</td>
          <td>{{ user.Barangay }}</td>
          <td>{{ user.School_Intended }}</td>
          <td>{{ user.Exam_set }}</td>
          <td>{{ user.Course }}</td>
          <td>{{ user.status }}</td>

          <td class="center"></td>
        </tr>
      </tbody>
    </table> -->
  </v-card>
  <!-- {{ users.exam_finish }} -->
</template>
  <script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      // dataTable: [],
      rows: [],
      post: {},
      selected: [],
      ID: "",
      Lastname: "",
      Firstname: "",
      Middlename: "",
      Barangay: "",
      School_Intended: "",
      Exam_set: "",
      Course: "",
      status: "",
      score: "",
      search: "",
      headers: [
        {
          align: "start",
          key: "Lastname",
          sortable: false,
          title: "Lastname",
        },
        { key: "Firstname", title: "Firstname", sortable: false },
        { key: "Middlename", title: "Middlename", sortable: false },
        { key: "Barangay", title: "Barangay", sortable: false },
        { key: "School_Intended", title: "School Intended", sortable: false },
        { key: "Exam_set", title: "Exam Set", sortable: false },
        { key: "Course", title: "Course", sortable: false },
        { key: "status", title: "Status", sortable: false },
        { key: "score", title: "Score", sortable: false },
        // { key: "timeStarted", title: "Time Started" },
        // { key: "timeEnded", title: "Time Ended" },
      ],
    };
  },
  // -------Auto-refresh - just remove the comment if needed \/ ------
  // mounted(){
  //     setInterval(this.fetchUsers, 5000);
  // },

  computed: {
    ...mapGetters("users", { users: "getUsers" }),
  },
  created() {
    this.fetchUsers();
    //    setTimeout(()=>{
    //     console.log("users=",this.users);
    //    },2000);
  },
  methods: {
    ...mapActions("users", ["fetchUsers"]),

    // populateRows() {
    //   this.rows = this.users.map((user) => ({
    //     ID: user.ID,
    //     Lastname: user.Lastname,
    //     Firstname: user.Firstname,
    //     Middlename: user.Middlename,
    //   }));
    // },
    handleRowClick(item, row) {
      console.log("users=", item);
      console.log("users=", row.item.raw.ID);
      this.$router.push({ name: "StudentDetails",  params: { id: row.item.raw.ID } })
      //   this.$router.push({
      //   name: "StudentDetails",
      //   params: {
      //     ID: users.ID,
      //   },
      // });
    },
  },
  check() {
    console.log("this.users=", this.users);
  },
};
</script>