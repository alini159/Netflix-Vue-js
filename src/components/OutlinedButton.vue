<template>
  <div class="outlined-button">
    <v-btn
      class="ma-2 configuration"
      outlined
      height="48"
      color="#3A0453"
    >
      {{ text }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'FilledButton',
  props: {
    text: String,
  },
  methods: {
    goTo() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
.outlined-button {
  .configuration {
    text-transform: none;
    font-family: 'Ubuntu-Bold';
    height: 48px;
  }
}
</style>