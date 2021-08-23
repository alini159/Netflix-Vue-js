<template>
  <nav>
    <v-app-bar app color="#3A0453" dark>
      <v-icon class="mr-4 ml-2">fas fa-video</v-icon>
      <v-toolbar-title>
        <v-btn text class="ml-2" color="button-color" to="/dashboard">
          Netflix Statz
        </v-btn>
      </v-toolbar-title>
      <v-autocomplete
        clearable
        hide-no-data
        hide-selected
        color="white"
        label="Buscar"
        prepend-inner-icon="search"
        flat
        :items="movies"
        item-text="title"
        item-value="id"
        id="search"
        class="mt-7 ml-10 mr-8"
      >
        <template v-slot:item="{ item }">
          <v-btn text :to="`/movie/${item.id}`">{{ item.title }}</v-btn>
        </template>
      </v-autocomplete>
      <v-avatar size="100">
        <v-img src="../assets/images/avatarIcons/3.png"></v-img>
      </v-avatar>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    model: "",
    search: null,
    movies: [],
  }),
  mounted() {
    this.loadMovies();
  },
  methods: {
    loadMovies: async function() {
      try {
        const response = await this.$http.get("/movie/popular");
        this.movies = response.data.results;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
