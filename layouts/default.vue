<template>
  <v-app dark>
    <v-app-bar fixed app flat>
      <v-toolbar-title>
        <span class="red--text font-weight-bold">Laravel</span> Job Batching
      </v-toolbar-title>
      <v-spacer />
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
