<template>
  <div class="line">
    ou
  </div>
</template>
<script>
export default {
  name: 'LineOrPink'
}
</script>

<style lang="scss">
.line {
  display: flex;
  align-items: center;
  text-align: center;
  color: $border-color-secundary;
  &::before, &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid $border-color-secundary;
  }
  &:not(:empty)::before {
    margin-right: .56em;
  }
  &:not(:empty)::after {
    margin-left: .56em;
  }
}
</style>