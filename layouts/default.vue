<template>
  <v-app dark>
    <v-app-bar fixed app flat class="px-8">
      <nuxt-link to="/">
        <v-toolbar-title>
          <span class="red--text font-weight-bold">Laravel</span> Job Batching
        </v-toolbar-title>
      </nuxt-link>
      <v-spacer />

      <span v-if="!$auth.loggedIn">
        <v-btn text to="/login">login</v-btn>
      </span>
      <span v-else>
        <v-btn text to="/upload">upload</v-btn>
        <profile-menu />
      </span>
    </v-app-bar>
    <v-main>
      <v-container class="my-16">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
a {
  text-decoration: unset !important;
  color: unset !important;
}
</style>
