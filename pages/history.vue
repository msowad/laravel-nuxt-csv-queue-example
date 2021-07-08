<template>
  <v-card>
    <v-card-title> History </v-card-title>
    <v-data-table
      :headers="headers"
      item-key="batch_id"
      :items="tasks"
      :search="search"
      sort-by="finished_at"
      sort-desc
    >
    </v-data-table>
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'File Name',
          align: 'start',
          value: 'file_name',
        },
        { text: 'Total Tasks', value: 'total_jobs', align: 'right' },
        { text: 'Failed Tasks', value: 'failed_jobs', align: 'right' },
        { text: 'Pending Tasks', value: 'pending_jobs', align: 'right' },
        { text: 'Added At', value: 'created_at', align: 'right' },
        { text: 'Finished At', value: 'finished_at', align: 'right' },
      ],
    };
  },

  async fetch() {
    await this.loadHistory();
  },

  computed: {
    ...mapState({ tasks: ({ file }) => file.previousTasks }),
  },

  methods: {
    ...mapActions('file', ['loadHistory']),
  },
};
</script>

<style></style>
