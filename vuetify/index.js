import colors from 'vuetify/es5/util/colors';

export default {
  customVariables: ['~/assets/variables.scss'],
  treeShake: true,
  defaultAssets: {
    font: {
      family: 'Poppins',
    },
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.purple,
        secondary: colors.blueGrey,
      },
      dark: {
        primary: colors.purple.lighten1,
      },
    },
  },
};
