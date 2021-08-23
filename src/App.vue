<template>
  <v-app style="background: none !important">
    <Toolbar />
    <v-main>
      <v-container fluid fill-height>
        <router-view />
      </v-container>
    </v-main>
    <!-- <Footer /> -->
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
// import NavBar from "@/components/NavBar.vue";
import Toolbar from "@/components/Toolbar.vue";
// import Footer from "@/components/Footer.vue";

export default {
  name: "App",

  components: {
    // NavBar,
    Toolbar,
    // Footer,
  },

  computed: {
    ...mapGetters(["currentUser"]),
  },

  watch: {
    currentUser(currentUser) {
      if (currentUser) {
        this.$router.push("/dashboard");
      }
    },
  },
};
</script>
