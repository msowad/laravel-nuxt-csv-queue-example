<template>
  <v-card max-width="800px" class="mx-auto pa-10">
    <div class="text-center">
      <h5 class="display-1">
        <span class="red--text font-weight-bold"> Laravel</span> Job Batching
      </h5>
      <h5 class="headline my-3">
        Uploading csv files in background with realtime progress bar
      </h5>
    </div>
    <v-card max-width="500px" class="mx-auto mt-4" flat>
      <v-list subheader>
        <v-subheader inset>Additional Features</v-subheader>
        <v-list-item v-for="feature in features" :key="feature.icon">
          <v-list-item-avatar :class="feature.class">
            <v-icon v-text="feature.icon" />
          </v-list-item-avatar>
          <v-list-item-content>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <v-list-item-title v-html="feature.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-card>
</template>

<script>
export default {
  auth: false,

  data: () => ({
    features: [
      {
        icon: 'mdi-account',
        class: 'amber',
        title: 'Authentication using <a>Laravel JWT</a>',
      },
      {
        icon: 'mdi-painting',
        class: 'blue',
        title:
          'Designed with <a href="https://vuetifyjs.com" target="_blank">vuetify</a>',
      },
      {
        icon: 'mdi-history',
        class: 'purple lighten-2',
        title: 'Track previous activity',
      },
    ],
  }),
};
</script>
