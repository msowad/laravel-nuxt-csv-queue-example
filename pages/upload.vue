<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <completed-task />

      <task-progress />

      <file-form @fileSent="loadProgress" @clear="clearProgressInterval" />
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data: () => ({
    progressInterval: null,
  }),

  async fetch() {
    await this.loadPendingTask();
  },

  head: {
    title: 'Upload',
  },

  computed: {
    ...mapState({
      tasks: ({ file }) => file.tasks,
      completedTasks: ({ file }) => file.completedTasks,
    }),
  },

  mounted() {
    this.loadProgress();
  },

  beforeDestroy() {
    clearInterval(this.progressInterval);
  },

  methods: {
    clearProgressInterval() {
      clearInterval(this.progressInterval);
    },

    loadProgress() {
      clearInterval(this.progressInterval);
      this.progressInterval = setInterval(() => {
        if (
          this.tasks.length &&
          this.tasks.filter((t) => t.progress < 100).length
        ) {
          const ids = this.tasks.map((t) => t.id);
          this.loadTaskProgress(ids);
        } else {
          clearInterval(this.progressInterval);
        }
      }, 3000);
    },

    ...mapActions('file', ['loadPendingTask', 'loadTaskProgress']),
  },
};
</script>
