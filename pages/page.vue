<template>
  <main class="page">
    <com-title>
      <span v-html="page.title.rendered"></span>
    </com-title>
    <div class="page-container container-lg">
      <div v-html="page.content.rendered" />
    </div>
  </main>
</template>

<script>
import he from 'he'

export default {
  async asyncData({ $api, route }) {
    const pageSlug = route.path.replace(/^\/+|\/+$/g, '')
    const { data: page } = await $api.page(pageSlug)
    return { page: page[0] }
  },

  head() {
    const title = this.page ? he.decode(this.page.title.rendered) : ''
    return {
      title: `${title} - Col·lectiu Ovidi Montllor`,
    }
  },
}
</script>

<style lang="scss">
.page {
  background: $white;

  &-container {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }
}
</style>
