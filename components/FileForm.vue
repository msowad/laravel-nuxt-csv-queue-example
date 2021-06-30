<template>
  <v-card class="pa-6">
    <v-form ref="form" v-model="valid" @submit.prevent="uploadFile">
      <v-card-title v-model="file" class="justify-center mb-2">
        Upload File
      </v-card-title>
      <v-file-input
        v-model="file"
        filled
        label="csv file"
        :rules="[required]"
      />
      <v-scroll-y-transition>
        <div v-if="error" class="pa-3 mb-3 mx-3 error lighten-1 rounded">
          <v-icon left>mdi-alert-circle</v-icon>
          <span v-text="error"></span>
        </div>
      </v-scroll-y-transition>
      <v-card-actions>
        <v-btn @click="$refs.form.reset()">clear</v-btn>
        <v-spacer />
        <v-btn
          :loading="loading"
          type="submit"
          color="primary"
          :disabled="!valid"
        >
          submit
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      loading: false,
      valid: false,
      file: null,
      required: (v) => !!v || 'The field is required.',
      progressInterval: null,
    };
  },
  computed: {
    ...mapState({
      error: ({ file }) => file.error,
      task: ({ file }) => file.task,
    }),
  },
  methods: {
    async uploadFile() {
      this.loading = true;
      try {
        const formData = new FormData();
        formData.append('csv', this.file);
        await this.upload(formData);
        this.$refs.form.reset();

        this.progressInterval = setInterval(() => {
          if (this.task.progress < 100) {
            this.loadTaskProgress(this.task.id);
          } else {
            clearInterval(this.progressInterval);
          }
        }, 1000);
      } catch (e) {
        console.log(e);
      }
      this.loading = false;
    },
    ...mapActions('file', ['upload', 'loadTaskProgress']),
  },
};
</script>

<style></style>
