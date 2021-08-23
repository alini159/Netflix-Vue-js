<template>
  <v-row no-gutters justify="center" fill-height class="register">
    <v-col lg="5" md="12" class="pr-8">
      <v-card elevation="0" class="pa-6 mt-6">
        <v-card-title class="font-weight-bold pa-0 mb-0 mt-2 card-title">Cadastro</v-card-title
        >
        <forms-register @register="createFirebaseUser" />
        <line-or />
        <v-row justify="center mt-4 mb-10">
          <outlined-button text="Já possuo conta" />
          <filled-button text="Entrar com Facebook" icon="mdi-facebook" />
        </v-row>
      </v-card>
    </v-col>
    <v-col lg="5" md="12" class="mt-4 pl-20">
      <v-img   src="@/assets/images/cadastro.svg" />
    </v-col>
  </v-row>
</template>
<script>
import FormsRegister from "../components/FormsRegister.vue";
import firebase from "firebase";
import LineOr from "../components/LineOrPurple.vue";
import OutlinedButton from "../components/OutlinedButton.vue";
import FilledButton from "../components/FilledButton.vue";

export default {
  name: "Register",
  components: {
    FormsRegister,
    LineOr,
    FilledButton,
    OutlinedButton,
  },
  methods: {
    createFirebaseUser(user) {
      // console.log(user);
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: user.name,
            })
            .then(() => {
              this.$router.push({ name: 'login' });
            });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>
<style lang="scss">
.register {
  .card-title {
    text-align: center;
    font-size: 25px;
    display: block;
    color: $button-color;
    font-family: "Arial";
  }
}
</style>
