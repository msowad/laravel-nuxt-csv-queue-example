<template>
  <v-card elevation="10" class="mb-6">
    <v-toolbar color="indigo mb-4" dark>
      <v-toolbar-title>Task in progress</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn :disabled="task.progress < 100" icon @click="clearTask">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <div class="px-6 pb-6 d-flex align-center flex-column">
      <v-progress-circular
        :rotate="360"
        :size="100"
        :width="15"
        :value="task.progress"
        color="success"
      >
        {{ task.progress }}%
      </v-progress-circular>
      <v-row class="mt-6">
        <v-col cols="6">
          <v-card
            class="lighten-2 black--text primary text-center pa-3"
            elevation="10"
          >
            <h4 class="subtitle-1">Total Job</h4>
            <p class="ma-0" v-text="task.totalJobs"></p>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card
            class="lighten-2 black--text warning text-center pa-3"
            elevation="10"
          >
            <h4 class="subtitle-1">Pending Job</h4>
            <p class="ma-0" v-text="task.pendingJobs"></p>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card
            class="lighten-2 black--text success text-center pa-3"
            elevation="10"
          >
            <h4 class="subtitle-1">Processed Job</h4>
            <p class="ma-0" v-text="task.processedJobs"></p>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card
            class="lighten-2 black--text error text-center pa-3"
            elevation="10"
          >
            <h4 class="subtitle-1">Failed Job</h4>
            <p class="ma-0" v-text="task.failedJobs"></p>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: { task: { type: Object, required: true } },
  methods: {
    ...mapActions('file', ['clearTask']),
  },
};
</script>

<style></style>
