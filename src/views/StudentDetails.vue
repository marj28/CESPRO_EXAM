<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <div class="pa-4">
          <v-btn
            class="text-none primary"
            min-width="92"
            rounded
            variant="outlined"
            @click="$router.push('/').catch((err) => {})"
          >
            <v-icon> mdi-arrow-left </v-icon>
            Back
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" >
        <h2>Student Details</h2>
        <!-- <template v-if="students"> -->
        <p>Lastname: {{ Student.Lastname}}</p>
        <p>Firstname: {{ Student.Firstname }}</p>
        <p>Middlename: {{ Student.Middlename }}</p>
        <p>Barangay: {{ Student.Barangay }}</p>
        <p>School Intended: {{ Student.School_Intended }}</p>
        <p>Exam Set: {{ Student.Exam_set }}</p>
        <p>Course: {{ Student.Course }}</p>
        <!-- <p>Time Started: {{ Student.timeStarted}}</p>
        <p>Time Ended: {{ Student.timeEnded }}</p> -->
        <p>Status: {{ Student.status }}</p>
        <!-- </template> -->
        <!-- <template v-else>
          <p>Loading Details</p>
        </template> -->
      </v-col>
      <v-col>
        <v-card class="pa-3" v-for="answer in Answers"> Diria ang Answer Sheet </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions,mapGetters } from 'vuex';


export default {
  data: () => ({
    Examinee:[],
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
  }),
  computed: {
    ...mapGetters('users', {Student: ['getStudents'], Answers: ['getAnswer']} ),
    // refresh(){
    //   let data = new FormData;
    // console.log("examineeId=",this.$route.params.id);
    // data.append('Examinee_ID', localStorage.getItem('ID'));
    // this.fetchStudent(data);
    // }
    // student() {
    //   const examineeID = parseInt(this.$route.params.id);
    //   const studentData = this.getStudents.users || [];
    //   return studentData.find(student => student.ID === examineeID) || {};
    // },
  },
  created() {
    let data = new FormData;
    console.log("examineeId=",this.$route.params.id)
    data.append('Examinee_ID', localStorage.getItem('ID'))
    this.fetchStudent(data);
    // setTimeout(() => {    
    //   console.log("student=",this.Student[0].Lastname)
    //   }, 500);
   
  },
  methods: {
    ...mapActions('users', ['fetchStudent'])
  },
};
</script>