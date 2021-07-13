<template>
  <v-card>
    <v-data-table
      :headers="headers"
      item-key="batch_id"
      :items="tasks"
      :search="search"
      :loading="loading"
    >
      <template #top>
        <v-toolbar flat>
          <v-toolbar-title>History</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn text icon @click="sync">
            <v-icon>mdi-sync</v-icon>
          </v-btn>
        </v-toolbar>
      </template>

      <template #[`item.action`]="{ item }">
        <v-btn icon text :to="`/files/${item.batch_id}`">
          <v-icon>mdi-eye</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      loading: false,
      search: '',
      headers: [
        {
          text: 'File Name',
          align: 'start',
          value: 'file_name',
        },
        { text: 'Total Tasks', value: 'total_jobs', align: 'right' },
        { text: 'Failed Tasks', value: 'failed_jobs', align: 'right' },
        { text: 'Added At', value: 'created_at', align: 'right' },
        { text: 'Finished At', value: 'finished_at', align: 'right' },
        { text: 'Action', value: 'action', sortable: false, align: 'right' },
      ],
    };
  },

  async fetch() {
    await this.loadHistory();
  },

  head: {
    title: 'History',
  },

  computed: {
    ...mapState({ tasks: ({ file }) => file.previousTasks }),
  },

  methods: {
    async sync() {
      this.loading = true;
      await this.loadHistory();
      this.loading = false;
    },
    ...mapActions('file', ['loadHistory']),
  },
};
</script>

<style></style>
