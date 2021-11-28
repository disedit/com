<template>
  <div class="paginator">
    <nuxt-link
      v-if="currentPage > 1"
      :to="`${base}?page=${prevPage}${category}`"
      class="prev"
      >&lt; Notícies més recents</nuxt-link
    >
    <nuxt-link
      v-if="currentPage < totalPages"
      :to="`${base}?page=${nextPage}${category}`"
      class="next"
      >Notícies anteriors &gt;</nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: {
    base: {
      type: String,
      default: '/',
    },
    currentPage: {
      type: [Number, String],
      default: 1,
    },
    totalPages: {
      type: [Number, String],
      required: true,
    },
  },

  computed: {
    nextPage() {
      return parseInt(this.currentPage) + 1
    },

    prevPage() {
      return parseInt(this.currentPage) - 1
    },

    category() {
      if (this.$route.query.category) {
        return `&category=${this.$route.query.category}`
      }

      return ''
    },
  },
}
</script>

<style lang="scss" scoped>
.paginator {
  display: flex;

  .next {
    margin-left: auto;
  }
}
</style>
