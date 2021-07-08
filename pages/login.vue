<template>
  <div>
    <auth-form
      is-login
      :init-form="initForm"
      :loading="loading"
      @onSubmit="login"
    >
      <v-alert
        :value="error ? true : false"
        transition="slide-y-transition"
        type="error"
        :icon="false"
        text
      >
        {{ error }}
      </v-alert>
    </auth-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    error: null,
    initForm: { email: 'csv@mail.com', password: 'Pa$$w0rd!' },
  }),

  methods: {
    async login(user) {
      this.loading = true;
      try {
        await this.$auth.loginWith('laravelJWT', {
          data: user,
        });
      } catch ({ response: data }) {
        this.error = data.data.error;
      }
      this.loading = false;
    },
  },
};
</script>

<style></style>
