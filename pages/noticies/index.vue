<template>
  <main class="posts-archive">
    <com-title oversized-bottom>Notícies</com-title>
    <div class="container-lg">
      <div v-if="!$fetchState.pending" class="row">
        <div class="col-md-8">
          <com-posts :posts="posts" layout="vertical" />
          <com-paginator
            base="/noticies"
            :current-page="currentPage"
            :total-pages="totalPages"
          />
        </div>
        <div class="col-md-4">
          <h2>Categories</h2>
          <ul>
            <li v-for="category in categories" :key="category.id">
              <nuxt-link :to="'/noticies/?category=' + category.id">
                {{ category.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div v-else>Carregant...</div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $api }) {
    const { data: categories } = await $api.categories()
    return { categories }
  },

  data() {
    return {
      total: 0,
      totalPages: 0,
      posts: [],
    }
  },

  async fetch() {
    const posts = await this.$api.posts({
      per_page: 5,
      page: this.$route.query.page || 1,
      categories: this.$route.query.category || null,
    })
    this.posts = posts.data
    this.total = posts.headers['x-wp-total']
    this.totalPages = posts.headers['x-wp-totalpages']
  },

  computed: {
    currentPage() {
      return this.$route.query.page || 1
    },
  },

  watch: {
    '$route.query': '$fetch',
  },
}
</script>

<style lang="scss" scoped>
.posts-archive {
  margin-bottom: 2rem;
}
</style>
