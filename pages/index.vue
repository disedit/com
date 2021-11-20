<template>
  <div class="container">
    <h2 class="heading-narrow">Banners</h2>
    <com-banners :banners="banners" />
    <h2 class="heading-narrow">Artistes</h2>
    <com-artists :artists="artists" />
    <h2>Notícies</h2>
    <com-posts :posts="posts" />
    <nuxt-link to="/noticies">Notícies</nuxt-link>
  </div>
</template>

<script>
export default {
  async asyncData({ $api }) {
    const { data: artists } = await $api.artists()
    const { data: banners } = await $api.banners()
    const { data: posts } = await $api.posts({ per_page: 3 })

    return { artists, banners, posts }
  },
}
</script>
