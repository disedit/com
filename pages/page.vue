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
    const pageSlugParts = pageSlug.split('/')
    const { data: page } = await $api.page(
      pageSlugParts[pageSlugParts.length - 1]
    )
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

.wp-block-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
}

.wp-block-button a {
  display: block;
  padding: 3em 2.5em;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: $gray-800;
  background: $gray-100;
  border-radius: 2rem;
  border-bottom-left-radius: 0;

  &:hover {
    color: $white;
    background: $red;
  }
}
</style>
