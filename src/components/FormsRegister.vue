<template>
  <v-form ref="form" v-model="valid" lazy-validation class="register-form">
    <v-text-field v-model="name" label="Nome" required></v-text-field>
    <div>
      <!-- <div class="mb-6">
        Active picker: <code>{{ activePicker || "null" }}</code>
      </div> -->
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Birthday date"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          :active-picker.sync="activePicker"
          :max="
            new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
              .toISOString()
              .substr(0, 10)
          "
          min="1950-01-01"
          @change="save"
        ></v-date-picker>
      </v-menu>
    </div>
    <v-text-field
      v-model="email"
      :rules="rules.emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="showPassword ? 'text' : 'password'"
      name="input-10-1"
      label="Senha"
      hint="Mínimo de 8 caracteres"
      @click:append="showPassword = !showPassword"
    >
    </v-text-field>

    <v-text-field
      v-model="passwordConfirmation"
      :append-icon="showPasswordConfirmation ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.passwordMatch]"
      :type="showPasswordConfirmation ? 'text' : 'password'"
      name="input-10-1"
      label="Confirmar senha"
      hint="Mínimo de 8 caracteres"
      @click:append="showPasswordConfirmation = !showPasswordConfirmation"
    >
    </v-text-field>
    <v-btn
      :disabled="!valid"
      color="#3A0453"
      class="mr-4 mt-4 mb-6 button"
      large
      @click="validate"
    >
      Criar conta
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: "FormsRegister",
  data() {
    return {
      valid: true,
      name: "",
      activePicker: null,
      date: null,
      menu: false,
      email: "",
      password: "",
      passwordConfirmation: "",
      showpasswors: false,
      showpassworsConfirmation: false,
      rules: {
        required: (value) => !!value || "Obrigatório.",
        min: (v) => v.length >= 8 || "Minimo 8 characteres",
        passwordMatch: () =>
          this.password === this.passwordConfirmation ||
          `senhas nao sao iguais`,
        emailRules: [
          (v) => !!v || "Obrigatorio",
          (v) => /.+@.+\..+/.test(v) || "E-mail deve ser um endereço valido",
        ],
      },
    };
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  methods: {
    save(date) {
      console.log(date);
      this.$refs.menu.save(date);
    },
    validate() {
      if (this.$refs.form.validate()) {
        const userRegister = {
          name: this.name,
          date: this.date,
          email: this.email,
          password: this.password,
        };
        this.$emit("register", userRegister);
      }
    },
  },
};
</script>
<style lang="scss">
.register-form {
  .button {
    color: #fafafa;
    text-transform: none;
    width: 100%;
  }
}
</style>
