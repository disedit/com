<template>
  <main class="home">
    <com-banners :banners="banners" />
    <com-artists :artists="artists" />
    <div class="home-posts">
      <div class="container-lg">
        <nuxt-link
          to="/noticies"
          class="home-posts-title d-flex align-items-baseline mb-4"
        >
          <h2>Notícies</h2>
          <span class="ms-auto opacity-50">Arxiu de notícies</span>
        </nuxt-link>
        <com-posts :posts="posts" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $api }) {
    const { data: artists } = await $api.artists()
    const { data: banners } = await $api.banners()
    const { data: posts } = await $api.posts({ per_page: 4 })

    return { artists, banners, posts }
  },
}
</script>

<style lang="scss" scoped>
.home-posts {
  padding: 8vh 0;
  background: $white;

  &-title {
    text-decoration: none;
    color: $black;

    &:hover {
      color: $red;
    }

    h2 {
      font-family: $font-family-headings-wide;
      font-weight: bold;
    }
  }
}
</style>
