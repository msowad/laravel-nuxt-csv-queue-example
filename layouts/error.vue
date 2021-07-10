<template>
  <v-app dark>
    <v-card class="px-md-8 py-8 mx-auto text-center" max-width="600px">
      <h1 class="display-4">
        {{ error.statusCode }}
      </h1>
      <p class="headline my-4">
        {{ error.message }}
      </p>
      <v-btn color="primary" text to="/">
        <v-icon left>mdi-home</v-icon>
        Home page
      </v-btn>
    </v-card>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      title: this.error.message,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
