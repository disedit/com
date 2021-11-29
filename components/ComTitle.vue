<template>
  <header :class="['com-title', { 'oversized-bottom': oversizedBottom }]">
    <div class="container-lg">
      <div class="overtitle">
        <slot name="overtitle" />
      </div>
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
    font-size: 3.5rem;
    font-weight: bold;

    @include media-breakpoint-down(md) {
      font-size: 2.25rem;
    }
  }

  &.oversized-bottom {
    padding-bottom: 6rem;
  }

  .overtitle {
    position: relative;
    z-index: 20;
    color: $black;
    font-family: $font-family-headings-wide;
    font-weight: bold;
    font-size: 1.15rem;

    &::v-deep a {
      color: inherit;
      display: block;
      text-decoration: none;

      &:hover {
        opacity: 0.5;
      }
    }
  }
}
</style>
