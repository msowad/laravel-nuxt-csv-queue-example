<template>
  <v-card max-width="800px" class="mx-auto py-4 py-md-10 px-md-10">
    <div class="text-center">
      <h5 class="headline">
        <span class="red--text font-weight-bold"> Laravel</span> Job Batching
      </h5>

      <v-row>
        <v-col
          v-for="{ src, alt, w } in images"
          :key="alt"
          cols="12"
          md="4"
          align-self="center"
          class="d-flex justify-center my-6"
        >
          <v-img :max-width="`${w ? w : 90}px`" :src="src" :alt="alt" />
        </v-col>
      </v-row>

      <h5 class="title my-3">
        Uploading csv files in background with progress report
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
            <div v-html="feature.title" />
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
        class: 'cyan accent-2',
        title:
          'Authentication using <a class="feature-card-link" href="https://jwt-auth.readthedocs.io">Laravel JWT</a>',
      },
      {
        icon: 'mdi-file',
        class: 'pink accent-1',
        title: 'Preview file data',
      },
      {
        icon: 'mdi-history',
        class: 'purple accent-1',
        title: 'Track previous activity',
      },
      {
        icon: 'mdi-palette',
        class: 'indigo accent-1',
        title:
          'Designed with <a class="feature-card-link" href="https://vuetifyjs.com" target="_blank">vuetify</a>',
      },
    ],
    images: [
      {
        src: '/laravel.svg',
        alt: 'Laravel Logo',
        w: 150,
      },
      {
        src: '/vuetify-logo.svg',
        alt: 'Vuetify Logo',
      },
      {
        src: '/nuxt.png',
        alt: 'Nuxt Logo',
      },
    ],
  }),
};
</script>

<style lang="scss">
.feature-card-link {
  text-decoration: underline !important;
}
</style>
