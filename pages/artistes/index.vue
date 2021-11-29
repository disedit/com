<template>
  <main class="artists-page">
    <com-artists :artists="artists" />
  </main>
</template>

<script>
export default {
  async asyncData({ $api }) {
    const { data: artists } = await $api.artists()
    return { artists }
  },

  head() {
    return {
      title: 'Artistes - Col·lectiu Ovidi Montllor',
    }
  },
}
</script>

<style lang="scss" scoped>
.artists {
  padding-top: $navbar-safe-area-loose;
}
</style>
