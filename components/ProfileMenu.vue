<template>
  <v-menu bottom min-width="200px" rounded offset-y>
    <template #activator="{ on }">
      <v-btn :loading="loading" icon x-large v-on="on">
        <v-avatar color="brown" size="48">
          <span class="white--text text-h5">{{ user.name[0] }}</span>
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-list-item-content class="justify-center">
        <div class="mx-auto text-center">
          <v-avatar color="brown">
            <span class="white--text text-h5">{{ user.name[0] }}</span>
          </v-avatar>
          <h3 class="mt-2">{{ user.name }}</h3>
          <p class="text-subtitle-2 mt-1">
            {{ user.email }}
          </p>
          <v-divider class="my-3"></v-divider>
          <v-btn depressed rounded text to="/history"> History </v-btn>
          <v-divider class="my-3"></v-divider>
          <v-btn depressed rounded text @click="logout"> Logout </v-btn>
        </div>
      </v-list-item-content>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      user: this.$auth.user,
    };
  },

  methods: {
    async logout() {
      this.loading = true;
      try {
        await this.$auth.logout();
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
  },
};
</script>

<style></style>
