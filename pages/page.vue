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
export default {
  async asyncData({ $api, route }) {
    const pageSlug = route.path.replace(/^\/+|\/+$/g, '')
    const { data: page } = await $api.page(pageSlug)
    return { page: page[0] }
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
