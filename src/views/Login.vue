<template>
  <v-row no-gutters justify="center" fill-height class="login">
    <v-col lg="5" md="12" class="pr-4">
      <v-card elevation="0" class="pa-4">
        <v-card-title class="font-weight-bold pa-0 card-title mt-16 mb-4"
          >Login</v-card-title
        >
        <forms-login @login="loginWithFirebase" />
        <line-or />
        <v-row justify="center mt-10 mb-10">
          <v-btn
            style="background: none !important"
            elevation="0"
            class="mt-4 mb-1"
            to="/cadastro"
          >
            <outlined-button text="Não possuo conta"></outlined-button>
          </v-btn>
            <filled-button
              text="Entrar com Facebook"
              icon="mdi-facebook"
              @click="loginWithFacebook"
            />
        </v-row>
      </v-card>
    </v-col>
    <v-col lg="5" md="12" class="mt-10 pl-6">
      <v-img src="@/assets/images/login.svg" />
    </v-col>
  </v-row>
</template>

<script>
import FormsLogin from "../components/FormsLogin.vue";
import LineOr from "../components/LineOrPurple.vue";
import OutlinedButton from "../components/OutlinedButton.vue";
import FilledButton from "../components/FilledButton.vue";
import firebase from "firebase";
import { mapActions } from "vuex";

export default {
  name: 'Login',
  components: {
    LineOr,
    FilledButton,
    OutlinedButton,
    FormsLogin,
  },
  methods: {
    ...mapActions(['addUser']),
    loginWithFirebase(user) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((data) => {
          this.addUser({
            name: data.user.displayName,
            email: data.user.email,
          }).then(() => {
            this.$router.push({ name: "perfil" });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  loginWithFacebook() {
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console(result);
        if (result.credential.accessToken) {
          this.redirectUser(result);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss">
.login {
  .card-title {
    font-size: 25px;
    text-align: center;

    display: block;
    color: $button-color;
    font-family: "Arial";
  }
}
</style>
