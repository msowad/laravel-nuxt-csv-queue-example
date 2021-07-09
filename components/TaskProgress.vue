<template>
  <v-expand-transition>
    <v-slide-y-transition v-if="tasks.length" group>
      <template v-for="task in tasks">
        <v-card :key="task.id" elevation="10" class="mb-6">
          <v-toolbar dense flat color="primary mb-4" dark>
            <v-toolbar-title>{{ task.name }}</v-toolbar-title>
          </v-toolbar>
          <div class="px-6 pb-6 d-flex align-center flex-column">
            <v-progress-circular
              :rotate="360"
              :size="80"
              :width="15"
              :value="task.progress"
              color="success"
            >
              {{ task.progress }}%
            </v-progress-circular>
            <v-row class="mt-2">
              <v-col
                v-for="result in getCards(task)"
                :key="`task-result-card${result.bg}`"
                cols="6"
              >
                <v-card
                  :class="`lighten-2 black--text ${result.bg} text-center pa-1`"
                  elevation="10"
                >
                  <h4 class="subtitle-2" v-text="result.title" />
                  <p class="ma-0" v-text="result.data" />
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </template>
    </v-slide-y-transition>
  </v-expand-transition>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      tasks: ({ file }) => file.tasks,
    }),
  },

  methods: {
    getCards(task) {
      return [
        { data: task.totalJobs, bg: 'primary', title: 'Total Tasks' },
        { data: task.pendingJobs, bg: 'warning', title: 'Pending Tasks' },
        { data: task.processedJobs, bg: 'success', title: 'Processed Tasks' },
        { data: task.failedJobs, bg: 'error', title: 'Failed Tasks' },
      ];
    },
    ...mapActions('file', ['clearTask']),
  },
};
</script>

<style></style>
