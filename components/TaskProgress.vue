<template>
  <v-card class="pa-6 pt-10 d-flex align-center flex-column">
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
          <h4>Total Job</h4>
          <p class="ma-0" v-text="task.totalJobs"></p>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card
          class="lighten-2 black--text warning text-center pa-3"
          elevation="10"
        >
          <h4>Pending Job</h4>
          <p class="ma-0" v-text="task.pendingJobs"></p>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card
          class="lighten-2 black--text success text-center pa-3"
          elevation="10"
        >
          <h4>Processed Job</h4>
          <p class="ma-0" v-text="task.processedJobs"></p>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card
          class="lighten-2 black--text error text-center pa-3"
          elevation="10"
        >
          <h4>Failed Job</h4>
          <p class="ma-0" v-text="task.failedJobs"></p>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: { task: { type: Object, required: true } },
};
</script>

<style></style>
