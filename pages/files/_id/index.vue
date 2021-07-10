<template>
  <v-row>
    <v-col cols="12">
      <v-card class="pa-2">
        <v-card-title v-text="fileName" />
      </v-card>
    </v-col>

    <v-col v-for="(row, index) in rows" :key="`file-row-${index}`" cols="12">
      <v-card class="pa-8">
        <div>
          <v-row
            v-for="(data, key) in row"
            :key="`file-single-data-${index}-${rand()}-${data}`"
          >
            <v-col cols="6" class="text-right">{{ key }}</v-col>
            <v-divider vertical />
            <v-col cols="6">{{ data }}</v-col>
          </v-row>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  async fetch() {
    await this.loadFile(this.$route.params.id);
  },

  computed: {
    ...mapState({
      rows: ({ file }) => file.fileRows,
      fileName: ({ file }) => file.fileName,
    }),
  },

  methods: {
    rand() {
      return Math.random();
    },

    ...mapActions('file', ['loadFile']),
  },
};
</script>

<style></style>
