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
        <p>Lastname: {{  }}</p>
        <p>Firstname:</p>
        <p>Middlename:</p>
        <p>Barangay:</p>
        <p>School Intended:</p>
        <p>Exam Set:</p>
        <p>Course:</p>
        <p>Time Started:</p>
        <p>Time Ended:</p>
        <p>Status:</p>
        <p>Remarks:</p>
      </v-col>
      <v-col>
        <v-card class="pa-3"> Diria ang Answer Sheet </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>


export default {
  data: () => ({
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
  computed: {},
  methods: {},
};
</script>