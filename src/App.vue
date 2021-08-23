<template>
  <v-app style="background: none !important">
    <toolbar />
    <v-main>
      <v-container fluid fill-height>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import Toolbar from "./components/Toolbar.vue";

export default {
  name: "App",

  components: {
    Toolbar,
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
