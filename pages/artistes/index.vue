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
    const links = []
    this.artists.forEach((artist) => {
      links.push({
        rel: 'preload',
        as: 'image',
        href: this.image(artist),
      })
    })
    return {
      title: 'Artistes - Col·lectiu Ovidi Montllor',
      meta: [
        {
          property: 'og:image',
          content: `https://elcom.cat/thumbnail.png`,
        },
        ...links,
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.artists {
  padding-top: $navbar-safe-area-loose;
}
</style>
