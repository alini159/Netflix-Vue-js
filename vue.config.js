module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      scss: {
        prependData() {
          return `
          @import "~@/assets/scss/main.scss";
          `;
        },
      },
    },
  },
};
