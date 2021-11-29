<template>
  <article class="article">
    <com-title class="article-title">
      <template #overtitle>
        <nuxt-link to="/noticies">Notícies /</nuxt-link>
      </template>
      <span v-html="article.title.rendered" />
    </com-title>
    <div class="article-container container-lg">
      <div class="article-info">
        <div class="article-picture">
          <img :src="image(article)" alt="" />
        </div>
      </div>
      <div class="article-content">
        <div v-html="article.content.rendered" />
      </div>
    </div>
  </article>
</template>

<script>
import UtilsMixin from '@/mixins/utils-mixin'

export default {
  mixins: [UtilsMixin],

  async asyncData({ $api, params }) {
    const { data: article } = await $api.post(params.article)
    return { article: article[0] }
  },
}
</script>

<style lang="scss" scoped>
.article {
  background: $white;

  &-container {
    display: grid;
    grid-template-columns: 1fr 450px;
    gap: 3rem;
  }

  &-info {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    transform: translateY(-10rem);
    position: relative;
    z-index: 10;
  }

  &-picture {
    position: sticky;
    top: 14rem;
    z-index: 10000;

    img {
      width: 100%;
      aspect-ratio: 1 / 1;
      border-radius: 10% 10% 10% 0;
      object-fit: cover;
      object-position: center;
    }
  }

  &-content {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    padding: 2rem 0;
    font-size: 1.15rem;
    line-height: 1.75;

    &::v-deep p {
      max-width: 60ch;
    }
  }
}

@include media-breakpoint-down(xl) {
  ::v-deep .com-title {
    padding-bottom: 10rem;
  }
  .article {
    &-container {
      grid-template-columns: 1fr;
    }

    &-content {
      grid-row: 2 / 2;
      grid-column: 1 / 1;
    }

    &-info {
      grid-row: 1 / 1;
      grid-column: 1 / 1;
      transform: translateY(0);
      margin-top: -9rem;
      margin-bottom: -3.5rem;
    }

    &-picture {
      margin: 0 -0.75rem;
    }
  }
}

::v-deep .com-title h1 {
  max-width: 700px;
}
</style>
