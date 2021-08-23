<template>
  <v-form ref="form" v-model="valid" lazy-validation class="login-form">
    <v-text-field
      v-model="email"
      :rules="rules.emailRules"
      label="E-mail"
      required
    >
    </v-text-field>

    <v-text-field
      v-model="password"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="showPassword ? 'text' : 'password'"
      name="input-10-1"
      label="Senha"
      hint="minimo 8 caracteres"
      counter
      @click:append="showPassword = !showPassword"
    >
    </v-text-field>
    <v-btn
      :disabled="!valid"
      color="#3A0453"
      large
      class="mr-4 button mt-8 mb-10"
      @click="validate"
    >
      Entrar
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: "FormsLogin",
  data() {
    return {
      valid: true,
      email: "",
      password: "",
      showPassword: false,
      rules: {
        required: (value) => !!value || "Obrigatório.",
        min: (v) => v.length >= 8 || "Minimo 8 characteres",
        emailRules: [
          (v) => !!v || "Obrigatorio",
          (v) => /.+@.+\..+/.test(v) || "E-mail deve ser um endereço valido",
        ],
      },
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        const userLogin = {
          email: this.email,
          password: this.password,
        };
        this.$emit("login", userLogin);
      }
    },
  },
};
</script>
<style lang="scss">
.login-form {
    background: none !important;
  .button {
    color: $button-text-secondary-color;
    text-transform: none;
    width: 100%;
  }
}
</style>
