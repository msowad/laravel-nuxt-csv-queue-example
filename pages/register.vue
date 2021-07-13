<template>
  <div>
    <auth-form :loading="loading" @onSubmit="register">
      <v-alert
        :value="errors ? true : false"
        transition="slide-y-transition"
        type="error"
        :icon="false"
        text
      >
        <ul v-for="(error, key) in errors" :key="`form-error-register-${key}`">
          <li>
            {{ error[0] }}
          </li>
        </ul>
      </v-alert>
    </auth-form>
  </div>
</template>

<script>
export default {
  auth: 'guest',

  data: () => ({ loading: false, errors: null }),

  head: {
    title: 'Register',
  },

  methods: {
    async register(user) {
      this.loading = true;
      try {
        await this.$axios.post('/auth/register', user);
        await this.$auth.loginWith('laravelJWT', {
          data: user,
        });
      } catch (error) {
        this.errors = error.response.data.errors;
      }
      this.loading = false;
    },
  },
};
</script>

<style></style>
