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
    return {
      title: `${he.decode(
        this.page.title.rendered
      )} - Col·lectiu Ovidi Montllor`,
    }
  },
}
</script>

<style lang="scss" scoped>
.page {
  background: $white;

  &-container {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}
</style>
