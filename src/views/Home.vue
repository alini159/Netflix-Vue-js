<template >
  <v-row no-gutters justify="center" class="home">
    <v-col lg="5" md="12" class="column-cards">
      <v-card class="pa-4 ma-2" elevation="0" tile>
        <v-card-title class="card-title">
          Filmes, Séries e muito mais. Sem limites.
        </v-card-title>
        <v-card-subtitle class="pa-4 card-subtitle">
          Assista onde e quando quiser, e cancele quando quiser. Pronto para
          assistir? Crie sua conta ou reinicie sua assinatura agora mesmo.
        </v-card-subtitle>
        <line-or />
        <v-card-text>
          <v-btn
            large
            dark
            class="ma-10 create-account buttons"
            color="#3A0453"
            @click="goTo('register')"
          >
            Criar conta
          </v-btn>
          <v-btn
            large
            class="ma-0  buttons"
            outlined
            color="#3A0453"
            @click="goTo('login')"
          >
            Já possuo uma conta
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col lg="5" md="12" class="column-card">
      <v-card class="pa-5" elevation="0" tile>
        <v-img class="img" src="@/assets/images/Checklist.svg"></v-img>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import LineOr from "../components/LineOr.vue";
export default {
  components: { LineOr },
  name: "Home",
  methods: {
    goTo(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>

<style lang="scss">
.home {
  
  .img {
    // margin-top: 50px;
    width: 500px;
  }
  .column-cards {
    margin-left: 110px;
    height: 100%;
    .card-title {
      color: $button-color !important;
      font-family: "Arial";
      text-align: center;
      font-size: 30px;
      margin-top: 90px;
      margin-bottom: 20px;
      line-height: 40px;
      word-break: break-word;
    }
    .card-subtitle {
      color: $button-color !important;
      font-family: "Verdana";
      text-align: center;
      font-size: 15px;
      margin-bottom: 30px;
      word-break: break-word;
    }

    .buttons {
      text-transform: none;
      font-family: "Arial";
      height: 50px;
      width: 190px;
    }
    .create-account {
      color: $button-text-secondary-color;
    }
  }
}
</style>
