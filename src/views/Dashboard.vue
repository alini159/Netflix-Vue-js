<template>
  <div>
    <PopularMovies />
    <UpcomingMovies />
  </div>
  <!-- <Footer/> -->
</template>

<script>
// import Footer from "@/components/Footer.vue";
import { mapGetters } from "vuex";
import PopularMovies from "../components/PopularMovies.vue";
import UpcomingMovies from "../components/UpcomingMovies.vue";


export default {
  name: "Dashboard",
  components: {
    PopularMovies,
    UpcomingMovies,
    // Footer,
  },
  data() {
    return {
      userName: "",
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  mounted() {
    this.userName = this.currentUser.name;
  },
};
</script>

<style></style>
