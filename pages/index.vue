<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-expand-transition>
        <task-progress v-if="task" :task="task" />
      </v-expand-transition>
      <file-form />
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
  computed: {
    ...mapState({ task: ({ file }) => file.task }),
  },
  mounted() {
    this.progressInterval = setInterval(() => {
      if (this.task?.progress < 100) {
        this.loadTaskProgress(this.task.id);
      } else {
        clearInterval(this.progressInterval);
      }
    }, 3000);
  },
  methods: {
    ...mapActions('file', ['loadPendingTask', 'loadTaskProgress']),
  },
};
</script>
