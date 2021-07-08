<template>
  <v-card max-width="500px" class="mx-auto pa-6">
    <v-form v-model="valid" @submit.prevent="submit">
      <v-card-title class="justify-center mb-2">
        {{ isLogin ? 'Login' : 'Register' }}
      </v-card-title>

      <v-text-field
        v-if="!isLogin"
        v-model="form.name"
        :rules="[rules.required()]"
        label="Name"
        filled
        :autofocus="!isLogin"
      />

      <v-text-field
        v-model="form.email"
        :autofocus="isLogin"
        :rules="[rules.email()]"
        label="Email"
        filled
      />

      <v-text-field
        v-model="form.password"
        :rules="[rules.required()]"
        label="Password"
        filled
        :type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append="showPassword = !showPassword"
      />

      <v-text-field
        v-if="!isLogin"
        v-model="form.password_confirmation"
        :rules="[rules.required()]"
        label="Confirm Password"
        filled
        :type="showConfirmPassword ? 'text' : 'password'"
        :append-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append="showConfirmPassword = !showConfirmPassword"
      />

      <slot></slot>

      <v-card-actions>
        <nuxt-link
          :to="isLogin ? `/register` : '/login'"
          class="text-decoration-underline"
        >
          {{ isLogin ? 'New here? Signup' : 'Have an account? Login' }}
        </nuxt-link>
        <v-spacer />
        <v-btn
          :disabled="!valid"
          :loading="loading"
          type="submit"
          class="primary"
        >
          {{ isLogin ? 'Login' : 'Register' }}
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import { required, email, password } from '@/utils/validations';

export default {
  props: {
    isLogin: Boolean,
    loading: Boolean,
    initForm: { type: Object, default: null },
  },

  data() {
    return {
      showPassword: false,
      showConfirmPassword: false,
      valid: false,
      form: this.initForm || {},
      rules: {
        required,
        email,
        password,
      },
    };
  },

  methods: {
    submit() {
      this.$emit('onSubmit', this.form);
    },
  },
};
</script>

<style></style>
