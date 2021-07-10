<template>
  <v-expand-transition>
    <v-slide-y-transition v-if="tasks.length" group>
      <template v-for="task in tasks">
        <v-card :key="task.id" elevation="10" class="mb-6">
          <v-toolbar dense flat color="primary mb-4" dark>
            <v-toolbar-title>{{ task.name }}</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn small icon @click="clearCompletedTask(task.id)">
              <v-icon small>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-row class="px-md-6">
            <v-col cols="12" class="justify-center d-flex">
              <v-progress-circular
                :rotate="360"
                :size="80"
                :width="15"
                :value="task.progress"
                color="success"
              >
                {{ task.progress }}%
              </v-progress-circular>
            </v-col>
            <v-col align-self="center">
              <h5 class="headline text-center">Completed!</h5>
            </v-col>
          </v-row>
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
      tasks: ({ file }) => file.completedTasks,
    }),
  },

  methods: {
    ...mapActions('file', ['clearCompletedTask']),
  },
};
</script>

<style scoped></style>
