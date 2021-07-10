<template>
  <v-card elevation="10" class="pa-md-6 pa-2">
    <v-form ref="form" v-model="valid" @submit.prevent="uploadFile">
      <v-card-title class="justify-center mb-2"> Upload File </v-card-title>
      <v-file-input
        v-model="file"
        filled
        label="csv file"
        :rules="[required]"
      />

      <v-alert transition="slide-y-transition" type="info" text dismissible>
        <a href="https://www.mockaroo.com/" target="_blank">
          You can download csv file from here
        </a>
      </v-alert>

      <v-alert
        :value="error ? true : false"
        transition="slide-y-transition"
        type="error"
        text
        :icon="false"
      >
        {{ error }}
      </v-alert>
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
    };
  },

  computed: {
    ...mapState({
      error: ({ file }) => file.error,
      task: ({ file }) => file.task,
    }),
  },

  beforeDestroy() {
    clearInterval(this.progressInterval);
  },

  methods: {
    async uploadFile() {
      this.loading = true;
      try {
        const formData = new FormData();
        formData.append('csv', this.file);
        formData.append('name', this.file.name.replace('.csv', ''));

        this.$emit('clear');

        await this.upload(formData);
        this.$refs.form.reset();

        this.$emit('fileSent');
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
