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
        <h3 class="green-text">STUDENT DETAILS</h3>
        <V-SPACER></V-SPACER>
        <!-- <template v-if="students"> -->
        <p>Lastname: {{ Student.Lastname}}</p>
        <p>Firstname: {{ Student.Firstname }}</p>
        <p>Middlename: {{ Student.Middlename }}</p>
        <p>Barangay: {{ Student.Barangay }}</p>
        <p>School Intended: {{ Student.School_Intended }}</p>
        <p>Exam Set: {{ Student.Exam_set }}</p>
        <p>Course: {{ Student.Course }}</p>
        <p>Year Level: {{ Student.Year_level }}</p>
        <!-- <p>Time Started: {{ Student.timeStarted}}</p>
        <p>Time Ended: {{ Student.timeEnded }}</p> -->
        <p>Status: {{ Student.status }}</p>
        <p>Score: {{ Student.score }}</p>
        <!-- </template> -->
        <!-- <template v-else>
          <p>Loading Details</p>
        </template> -->
      </v-col>
      <v-col>
        <p class="font-weight-black">ANSWER</p>
        <v-row>          
          <v-spacer></v-spacer>
          <v-col>
            <p>1. {{Answers.Question1}}</p>
          </v-col>
          <v-col>
            <p>2. {{Answers.Question2}}</p>
          </v-col>
          <v-col>
            <p>3. {{Answers.Question3}}</p>
          </v-col>
          <v-col>
            <p>4. {{Answers.Question4}}</p>
          </v-col>
          <v-col>
            <p>5. {{Answers.Question5}}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col>
            <p>6. {{Answers.Question6}}</p>
          </v-col>
          <v-col>
            <p>7. {{Answers.Question7}}</p>
          </v-col>
          <v-col>
            <p>8. {{Answers.Question8}}</p>
          </v-col>
          <v-col>
            <p>9. {{Answers.Question9}}</p>
          </v-col>
          <v-col>
            <p>10. {{Answers.Question10}}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col>
            <p>11. {{Answers.Question11}}</p>
          </v-col>
          <v-col>
            <p>12. {{Answers.Question12}}</p>
          </v-col>
          <v-col>
            <p>13. {{Answers.Question13}}</p>
          </v-col>
          <v-col>
            <p>14. {{Answers.Question14}}</p>
          </v-col>
          <v-col>
            <p>15. {{Answers.Question15}}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col>
            <p>16. {{Answers.Question16}}</p>
          </v-col>
          <v-col>
            <p>17. {{Answers.Question17}}</p>
          </v-col>
          <v-col>
            <p>18. {{Answers.Question18}}</p>
          </v-col>
          <v-col>
            <p>19. {{Answers.Question19}}</p>
          </v-col>
          <v-col>
            <p>20. {{Answers.Question20}}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col>
            <p>21. {{Answers.Question21}}</p>
          </v-col>
          <v-col>
            <p>22. {{Answers.Question22}}</p>
          </v-col>
          <v-col>
            <p>23. {{Answers.Question23}}</p>
          </v-col>
          <v-col>
            <p>24. {{Answers.Question24}}</p>
          </v-col>
          <v-col>
            <p>25. {{Answers.Question25}}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col>
            <p>26. {{Answers.Question26}}</p>
          </v-col>
          <v-col>
            <p>27. {{Answers.Question27}}</p>
          </v-col>
          <v-col>
            <p>28. {{Answers.Question28}}</p>
          </v-col>
          <v-col>
            <p>29. {{Answers.Question29}}</p>
          </v-col>
          <v-col>
            <p>30. {{Answers.Question30}}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col>
            <p>31. {{Answers.Question31}}</p>
          </v-col>
          <v-col>
            <p>32. {{Answers.Question32}}</p>
          </v-col>
          <v-col>
            <p>33. {{Answers.Question33}}</p>
          </v-col>
          <v-col>
            <p>34. {{Answers.Question34}}</p>
          </v-col>
          <v-col>
            <p>35. {{Answers.Question35}}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col>
            <p>36. {{Answers.Question36}}</p>
          </v-col>
          <v-col>
            <p>37. {{Answers.Question37}}</p>
          </v-col>
          <v-col>
            <p>38. {{Answers.Question38}}</p>
          </v-col>
          <v-col>
            <p>39. {{Answers.Question39}}</p>
          </v-col>
          <v-col>
            <p>40. {{Answers.Question40}}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col>
            <p>41. {{Answers.Question41}}</p>
          </v-col>
          <v-col>
            <p>42. {{Answers.Question42}}</p>
          </v-col>
          <v-col>
            <p>43. {{Answers.Question43}}</p>
          </v-col>
          <v-col>
            <p>44. {{Answers.Question44}}</p>
          </v-col>
          <v-col>
            <p>45. {{Answers.Question45}}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col>
            <p>46. {{Answers.Question46}}</p>
          </v-col>
          <v-col>
            <p>47. {{Answers.Question47}}</p>
          </v-col>
          <v-col>
            <p>48. {{Answers.Question48}}</p>
          </v-col>
          <v-col>
            <p>49. {{Answers.Question49}}</p>
          </v-col>
          <v-col>
            <p>50. {{Answers.Question50}}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col>
            <p>51. {{Answers.Question51}}</p>
          </v-col>
          <v-col>
            <p>52. {{Answers.Question52}}</p>
          </v-col>
          <v-col>
            <p>53. {{Answers.Question53}}</p>
          </v-col>
          <v-col>
            <p>54. {{Answers.Question54}}</p>
          </v-col>
          <v-col>
            <p>55. {{Answers.Question55}}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col>
            <p>56. {{Answers.Question56}}</p>
          </v-col>
          <v-col>
            <p>57. {{Answers.Question57}}</p>
          </v-col>
          <v-col>
            <p>58. {{Answers.Question58}}</p>
          </v-col>
          <v-col>
            <p>59. {{Answers.Question59}}</p>
          </v-col>
          <v-col>
            <p>60. {{Answers.Question60}}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col>
            <p>61. {{Answers.Question61}}</p>
          </v-col>
          <v-col>
            <p>62. {{Answers.Question62}}</p>
          </v-col>
          <v-col>
            <p>63. {{Answers.Question63}}</p>
          </v-col>
          <v-col>
            <p>64-65. {{Answers.Question64}}</p>
          </v-col>
          <v-col>
          </v-col>
        </v-row>
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
    answer: "",
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
   console.log("answers=",this.Answers)
  },
  methods: {
    ...mapActions('users', ['fetchStudent'])
  },
};
</script>