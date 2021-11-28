<template>
  <header :class="['com-title', { 'oversized-bottom': oversizedBottom }]">
    <div class="container-lg">
      <h1>
        <slot />
      </h1>
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

  h1 {
    font-family: $font-family-headings-wide;
    font-size: 3rem;
    font-weight: bold;

    @include media-breakpoint-down(md) {
      font-size: 2.25rem;
    }
  }

  &.oversized-bottom {
    padding-bottom: 6rem;
  }
}
</style>
