<template>
  <nav>
    <v-app-bar app color="#3A0453" dark>
      <v-icon class="mr-2">fas fa-video</v-icon>
      <v-toolbar-title
        ><v-btn text class="ml-2" color="button-color" to="/dashboard">
          Netflix Statz
        </v-btn></v-toolbar-title
      >
    </v-app-bar>
  </nav>
</template>
<script>
export default {
  name: "Toolbar",
};
</script>

<style lang="scss">
.toolbar {
  margin: 0 100px;
}
</style>
