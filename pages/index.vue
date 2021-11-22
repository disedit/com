<template>
  <main class="home">
    <com-banners :banners="banners" />
    <com-artists :artists="artists" />
    <com-posts :posts="posts" />
    <nuxt-link to="/noticies">Notícies</nuxt-link>
  </main>
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
