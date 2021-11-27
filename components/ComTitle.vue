<template>
  <header :class="['com-title', { 'oversized-bottom': oversizedBottom }]">
    <div class="container-lg">
      <h2>
        <slot />
      </h2>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    oversizedBottom: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.com-title {
  background: $primary;
  color: $white;
  padding-top: $navbar-safe-area-loose;
  padding-bottom: 2rem;

  h2 {
    font-family: $font-family-headings-wide;
    font-size: 3rem;
  }

  &.oversized-bottom {
    padding-bottom: 6rem;
  }
}
</style>
