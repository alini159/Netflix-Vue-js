<template>
  <div class="filled-button">
    <v-btn
      class="ma-2 configuration"
      color="#3e3e55"
      elevation="0"
      height="48"
      @click="goTo"
    >
      <v-icon class="mr-1"> {{ icon }}</v-icon>
      {{ text }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'FilledButton',
  props: {
    text: String,
    icon: String,
  },
  methods: {
    goTo() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
.filled-button {
  .configuration {
    text-transform: none;
    font-family: 'Ubuntu-Bold';
    height: 48px;
    color: $button-text-secondary-color;
  }
}
</style>