<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="fill-height d-flex align-center">
        <v-avatar class="me-10 ms-4" color="grey-darken-1" size="32"></v-avatar>

        <v-btn v-for="link in links" :key="link" variant="text">
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            density="compact"
            hide-details
            variant="solo"
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <!-- <v-sheet rounded="lg">
              <v-list rounded="lg">
                <v-list-item v-for="n in items" :key="n" link>
                  <v-list-item-title> {{ n }} </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-sheet> -->
            <v-btn size="large" color="green" @click="dialog=true">
              SUBMIT ALL

              <v-dialog v-model="dialog" width="auto" persistent="true">
                <v-card>
                  <v-card-text>
                    Are you sure you want to submit all data?
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="orange-darken-1"
                      variant="text"
                      @click="dialog = false"
                    >
                      Disagree
                    </v-btn>
                    <v-btn
                      color="green-darken-1"
                      variant="text"
                      @click="Exam_end()"
                    >
                      Agree
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-btn>
          </v-col>

          <v-col cols="10">
            <v-sheet min-height="70vh" rounded="lg">
              <student-list />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import StudentList from "@/views/StudentList.vue";
const links = [
  "Admin Dashboard",
  // 'Messages',
  // 'Profile',
  // 'Updates',
];
</script>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    dialog: false,
  }),
  computed: {
    ...mapGetters("stop", { Stop: ["getStop"] }),
  },
  created() {},
  methods: {
    ...mapActions("users", ["fetchStop"]),
    Exam_end() {
      this.dialog = false;
      this.fetchStop();
    },
  },
};
</script>
