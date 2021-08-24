<template>
  <v-row>
    <v-spacer></v-spacer>
    <v-col cols="auto">
      <v-card>
        <v-row>
          <v-avatar size="300">
            <v-img src="../assets/images/avatarIcons/3.png"></v-img>
          </v-avatar>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-card-title >{{ userName }}</v-card-title>
          <v-spacer> </v-spacer>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="auto" class="mb-5">
            <v-card-action>
              <v-btn color="deep-purple" text to="/dashboard"
                >Entrar</v-btn
              >
            </v-card-action>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-card>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      userName: '',
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
